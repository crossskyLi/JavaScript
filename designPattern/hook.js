export const hook = (vm, target, func) => {
  const _hookTarget = vm[target];
  const hookFunc = (...args) => {
    func(vm, ...args);
    return _hookTarget.apply(vm, args)
  }
  vm[target] = hookFunc;
}

export function doSomething(...args) {
  console.log("my hook", args)
}

const foo = {
  bar(...args) {
    console.log('bar', args)
  }
}

hook(foo, 'bar', doSomething);
let params = new Array(40).fill({ a: 1 })
foo.bar(...params)



const makeCaller = (config) => { return new socketCaller(config) }

let client = null;
function factory(config) {
  if (client) {
    return client
  }
  client = makeCaller(config);
  return client;
}

var Client = {
  timer: null,
  ready: false,

  init() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          this.ready = true;
          resolve()
        }, 30)
      } catch (error) {
        reject(error)
      }
    })
  },

  activated() {
    this.timer = setInterval(() => {
      this.receiveMsg({ topic: "alarm", body: { msg: "这是一条消息" } })
    }, 1000);
  },

  receiveMsg(msg) {
    this.onmessage(msg);
  },

  onmessage() { },

  destroy() {
    this.ready = false;
    clearInterval(this.timer);
  }
}

class socketCaller {
  options = null;
  client = {};
  config = {};
  idKey = "_uid"

  constructor(config) {
    this.config = config;
    this.subscribeMap = {}
    this.client = Object.create(Client)
  }

  init(options) {
    const { idKey } = options;
    if (idKey) { this.idKey = idKey }

    this.options = options;
    this.client.init().then(() => {
      this.client.activated()
    })
    this.onmessage();
  }

  subscribe(topic, vm, callback, hookName) {
    if (!topic) {
      throw new Error('topic is required');
    }

    if (!vm[this.idKey]) {
      throw new Error('id is required');
    }
    this.subscribeMap[topic] = this.subscribeMap[topic] || [];
    this.subscribeMap[topic].push({ instance: vm, [this.idKey]: vm[this.idKey], callback });

    let _hookName = hookName || "$destroy";
    const funchook = () => {
      return this.unsubscribe(topic, vm)
    }
    if (vm[_hookName] && typeof vm[_hookName] === "function") {
      hook(vm, _hookName, funchook)
    }

  }

  unsubscribe(topic, vm) {
    if (!this.subscribeMap[topic]) {
      throw new Error(`the ${topic} Topic is missed OR Client is destroy, please check the Topic OR the Client is existed`);
    }
    this.subscribeMap[topic] = this.subscribeMap[topic].filter((_) => {
      return _[this.idKey] !== vm[this.idKey]
    })
  }

  onmessage() {
    this.client.onmessage = (msg) => {
      const { topic } = msg;
      if (this.subscribeMap[topic]) {
        this.subscribeMap[topic].forEach(m => { m.callback(msg) })
      }
    }
  }

  destroy() {
    Object.keys(this.subscribeMap).forEach((topic) => { if (this.subscribeMap[topic]) this.subscribeMap[topic].length = 0; });
    this.subscribeMap = {};
    this.client.destroy();
  }
}
const config = { url: "my url" };
const options = { token: 'this is token', idKey: "_uid" }

const caller = factory(config);
caller.init(options)

const topic = 'alarm';
const vm = {
  _uid: 1,
  $destroy() {
    console.log("我要摧毁了")
  }
};
function callback(msg) {
  console.log("订阅消息", msg)
  console.log("订阅消息-消息体", msg.body);
}

caller.subscribe(topic, vm, callback);

setTimeout(() => {
  vm.$destroy();
}, 2000)

setTimeout(() => {
  caller.unsubscribe("alarm", vm);
}, 1000)

setTimeout(() => {
  caller.destroy();
}, 3100)
