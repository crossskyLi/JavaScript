(function () {
    var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB;// 兼容

    var request , database;
    request = indexedDB.open('admin');
    request.onerror = function (event) {
        console.log(event.target.errorcode)
    };
    request.onsuccess = function (event) {
        database = event.target.result;
        console.log(database);
        // request = database.setVersion('1.0'); // 已经被移除，不再使用
        // 代替的方法是在 open() 的时侯传入表示版本号的字符串，
        // 同时使用 onupgradeneeded 事件代替了 setVersion() 方法。
        // onupgradeneeded 事件会在 onsuccess 之前被调用。
        // [sourcecode lang=”javascript”]

        // tfan.indexedDB.open = function() {
        //     var request = indexedDB.open(‘parser17103’, 1);
        //     request.onupgradeneeded = function(event) {
        //         console.log("onupgradeneeded", event.currentTarget.result);
        //         var store = event.currentTarget.result.createObjectStore(‘question’, {keyPath: "question_id"});
        //         tfan.indexedDB.getAllQuestionItems();
        //     };
        //
        //     request.onsuccess = function(event) {
        //         console.log("open success");
        //         tfan.indexedDB.db = event.target.result;
        //     };
        //
        //     request.onerror = tfan.indexedDB.onerror;
        if(database.version !== '1.0'){
            database.version = '2';
            console.log(database);
        }
        console.log(database);
        console.log(request);
    };
    console.log('database',database)

})()