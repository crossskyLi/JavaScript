/**
 *
 * 观察者模式 订阅模式
 *
 * */
function PubSub() {
  this.handlers = {};
}
PubSub.prototype = {
  // 订阅事件
  on: function (eventType, handler) {
    var self = this;
    if (!(eventType in self.handlers)) {
      self.handlers[eventType] = [];
    }
    self.handlers[eventType].push(handler);
    return this;
  },
  // 触发事件(发布事件)
  emit: function (eventType) {
    var self = this;
    var handlerArgs = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < self.handlers[eventType].length; i++) {
      self.handlers[eventType][i].apply(self, handlerArgs);
    }
    return self;
  },
  // 删除订阅事件
  off: function (eventType, handler) {
    var currentEvent = this.handlers[eventType];
    var len = 0;
    if (currentEvent) {
      len = currentEvent.length;
      for (var i = len - 1; i >= 0; i--) {
        if (currentEvent[i] === handler) {
          currentEvent.splice(i, 1);
        }
      }
    }
    return this;
  }
};

function test() {
  var pubsub = new PubSub();
  var callback = function (data) {
    console.log('第一次没有被删除事件', data);
  };

  //订阅事件A 注册
  pubsub.on('A', function (data) {
    console.log(1 + data);
  });
  pubsub.on('A', function (data) {
    console.log(2 + data);
  });
  pubsub.on('A', callback);

  //触发事件A
  pubsub.emit('A', '我是参数', '123');
  // 1我是参数
  // 2我是参数
  // 第一次没有被删除事件 我是参数

  //删除事件A的订阅源callback
  pubsub.off('A', callback);

  pubsub.emit('A', '我是第二次调用的参数');
  //1我是第二次调用的参数
  //2我是第二次调用的参数
}
