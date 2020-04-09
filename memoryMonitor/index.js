
class MemoryMonitor {
  constructor(performance, increaseCallback, threshold) {
    this.timer = null;
    this.memory = {
      jsHeapSizeLimit: 0,
      totalJSHeapSize: 0,
      usedJSHeapSize: 0,
    }
    this.performance = performance || window ? window.performance : null;
    if (!this.performance) {
      throw new ReferenceError('performance doesn\'t exsit')
    }
    this.register()
    this.increaseCallback = increaseCallback;
    this.increaseThreshold = threshold || 0;
  }

  callback() {
    const lastUsed = this.lastUsed || 0;
    this.lastUsed = this.performance.memory.usedJSHeapSize - this.usedJSHeapSize;
    const momoryIncrease = this.lastUsed - lastUsed;
    if (!isNaN(momoryIncrease) && momoryIncrease > this.increaseThreshold) {
      this.increaseCallback(momoryIncrease);
    }
  }

  register() {
    this.timer = setInterval(this.callback.bind(this), 50)
    // 等任务队列执行完,再开始统计
    setTimeout(() => { this.usedJSHeapSize = this.performance.memory.usedJSHeapSize; }, 0)
  }

  destroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

const increaseCallback = (result) => {
  console.log('memory increase', result)
}
const threshold = 1000;
let monitor = new MemoryMonitor(window.performance, increaseCallback, threshold);

// window.arr = [];/* 内存不释放 */
// let timer = setInterval(() => { arr.push(new Array(102400).fill(Math.random())) }, 10)
// setTimeout(() => { monitor.destroy(); clearInterval(timer) }, 5000)
export default monitor