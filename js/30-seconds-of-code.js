// const anagrams = str => {
//     if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
//     let strArr = str.split('');
//     let result = strArr.reduce((acc, letter, i) =>
//         acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), [])
//     return result;
// };
// let result = anagrams('abc');
// console.log(result);



