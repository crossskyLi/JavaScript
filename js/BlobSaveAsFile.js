(function () {
    function downFile(blob, fileName) {
        let _window = window,
            _document = window.document,
            navigator = _window.navigator,
            link = null;
        if (navigator.msSaveOrOpenBlob) { // 兼容ie
            navigator.msSaveBlob(blob,fileName);
            console.log('ie')
        } else {
            link = _document.createElement('a');
            link.href = _window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click(); // a标签点击事件触发直接下载
            _window.URL.revokeObjectURL(link.href);//调用这个方法来让浏览器知道不再需要保持这个文件的引用了
        }
    }

    var blob = new Blob(['123'], {type: 'application/testNotIE.xlsx'}),
        fileName = 'testIE.xlsx';
    downFile(blob, fileName);

})();