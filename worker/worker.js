// settings
var workerNum = 10;
var itemsPerWorker = 1000000;

// start the workers
var result = 0;
var paddingWorkers = workerNum;
// handle the results
function handleStoreResult(event) {
  console.log('get result');
  result += event.data;
  if (paddingWorkers <= 0) {
    postMessage(result);
  }
}

for (var i = 0; i < workerNum; i += 1) {
  var worker = new Worker('./worker/core.js');
  worker.onmessage = handleStoreResult;
  worker.postMessage(i * itemsPerWorker);
  worker.postMessage((i + 1) * itemsPerWorker);
}