// 富途牛牛APP的发布时，会有一定的版本号规则,
// （1）目前版本号存在2种格式，如：
// - x.y.z
// - x.y 这种情况等同于 x.y.0
// （2）x y z的取值为 >=0 的整数字符串组成，如：101,10,001,1
// - 001 等同于 1
// （3）版本号的大小比较规则如下：
// - 比较版本号时，请按从左到右的顺序依次比较它们的x y z修订号。
// - 如 2.1.1 > 1.1.1 ; 2.1.1 > 2.0.1 ;2.1.1 === 2.01.1; 1.1.1 > 1.1;

// 给定一组由富途牛牛APP的版本字符串组成的数组，按照从小到大进行排序,输出排查后的数组。

// 如 ['2.1.0','2.01.2','1.1.3','2.0','3.0.2']

function sortVersion (arr){
    let res = []; 
    for(let i = 0; i < arr.length; i++){
        let item = arr[i].split('.');
        let len = item.length;
        for(let j = 0; j < 3 - len; j++){
            item.push('0');
        }
        res.push(item);
    }
    res.sort((a,b) => {
        for(let i = 0; i < 3; i++){
            if(a[i] > b[i]){
                return 1;
            }else if(a[i] < b[i]){
                return -1;
            }
        }
        return 0;
    })
    return res.map(item => item.join('.'));
}