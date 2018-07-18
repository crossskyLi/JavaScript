window.onload = () => {
    const imageRecord = [];

    function debounceByKey(callback, delay) {

        if (window.delayCallback) {
            return;
        }
        const time = delay ? delay : 100;
        window.delayCallback = () => {
            setTimeout(() => {
                callback();
                window.delayCallback = null;
            }, time)
        }
        window.delayCallback();
    }

    function pushImage(image) {
        imageRecord.push(image);
        debounceByKey(pullImage, 2000)
    }

    function pullImage() {
        const imageDom = new Image();
        imageDom.src = imageRecord[0];
        imageDom.onload = () => {
            document.body.appendChild(imageDom)
            imageRecord[0] && setTimeout(() => {
                pullImage()
            }, 1000);
        }
        imageRecord.splice(0, 1);
    }

    pushImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531934816256&di=9a3b7845762b6a84152e3cd16bc843e9&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9358d109b3de9c821370156d6081800a19d8433f.jpg')

    pushImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531934816256&di=1ed7a31d2d275c1ac1aa11ede9ead1f6&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F3812b31bb051f8195bf514a9d6b44aed2f73e705.jpg')

    pushImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531934816256&di=d66d86517a1a9092fe89bc62a8bcddad&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F09fa513d269759eeef490028befb43166d22df3c.jpg')

    pushImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531934816256&di=51253a76028533e445cd74a9327404bd&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb219ebc4b74543a96a58c53112178a82b801148f.jpg')

    pushImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531934816256&di=d52a833443f55718e513b1163974cf91&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F342ac65c103853434cc02dda9f13b07eca80883a.jpg')

    pushImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531934816255&di=1e5b2fc4f1092b6fc2fa174d605a5a7e&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff7246b600c338744cffb00985d0fd9f9d72aa013.jpg')

}