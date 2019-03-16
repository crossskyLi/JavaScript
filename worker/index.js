$(function () {
  console.log("begin")
  console.log("主进程start", performance.now())

  var worker = new Worker('./worker/worker.js');

  console.log("worker start")

  worker.onmessage = function (event) {
    console.log('worker', performance.now())
    console.log("worker 结果是10的 {data} 次方", Math.log10(event.data));
  }

  console.log("主进程 in progress")
  console.log("主进程 end", performance.now())

})