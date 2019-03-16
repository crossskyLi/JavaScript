// settings
var workerNum = 10;
var itemsPerWorker = Math.pow(10, 5);
console.log("worker 计算 {data} * 10  加法", Math.log10(itemsPerWorker));
// start the workers
var result = 0;
var paddingWorkers = workerNum;
// handle the results
function handleStoreResult(event) {
  result += event.data;
  paddingWorkers -= 1;
  if (paddingWorkers <= 0) {
    postMessage(result);
  }
}

for (var i = 0; i < workerNum; i += 1) {
  var worker = new Worker('./core.js');
  worker.postMessage(i * itemsPerWorker);
  worker.postMessage((i + 1) * itemsPerWorker);
  worker.onmessage = handleStoreResult;
}
