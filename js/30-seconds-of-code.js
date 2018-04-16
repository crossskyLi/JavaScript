(() => {
    let result
    const anagrams = str => {
        if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
        let strArr = str.split('');
        let result = strArr.reduce((acc, letter, i) =>
            acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), [])
        return result;
    };
    result = anagrams('abc');

    const strFilterChinese = ((str, doTurn) => {
        let length = str.length;
        let result = '';
        if(doTurn){
            for (let i = 0; i < length; i++) {
                if (str[i].charCodeAt() < 255) { 
                    result = `${str[i]}${result}`
                }
            }
            return result
        }
        for (let i = 0; i < length; i++) {
            if (str[i].charCodeAt() < 255) { 
                result = `${result}${str[i]}`
            }
        };
        return result
    })

    result = strFilterChinese('斯蒂芬hi123',true);
    console.log(result)



})()



