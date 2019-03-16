$(function () {
  // 需要本地起一个server 
  function getMarkdownFileTxt(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('get', url, true);
      xhr.responseType = "text"
      xhr.onload = (res) => { resolve(xhr.response) }
      xhr.onerror = (res) => { reject(xhr.response) }
      xhr.send();
    })
  };

  function createWorker(f) {
    var blob = new Blob(['(' + f.toString() + ')()']);
    var url = window.URL.createObjectURL(blob);
    var worker = new Worker(url);
    return worker;
  }

  var worker
  getMarkdownFileTxt('./worker/worker.js')
    .then((text) => {
      worker = createWorker(text);

      worker.onmessage = function (event) {
        console.log("main get message", event);
      }
    })

})