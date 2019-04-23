export function regTest() {
  console.log("%c START", 'color:#666;background: skyblue; padding:0 100px;')


  /**
   * search 找到立即返回下标,找不到返回 -1
   * match 返回一个数组,找不到返回null
   * replace 替换字符并返回一个新的字符,没有匹配则返回原字符 string 方法 string.replace(string|reg , string | function)
   * exec 与 match 类似 但正则在前面
   * test 正则在前面,匹配到 => true 没有匹配到 => false
   * split 使用正则表达式或者一个固定的字符串分割一个字符串,并把分隔后的子字符串放在一个数组中的 string 的方法 string.split(string | reg)
   */
  let testReg = /hi/;
  let testStr = 'ddhitdddhi'
  // 测试固定字符
  console.log(testStr.match(testReg))//["hi", index: 2, input: "ddhitdddhi", groups: undefined]
  console.log("------------\n")

  testReg = /\bhi\b/// 元字符匹配 metacharacter
  testStr = 'ddhitdddhi';
  console.log(testStr.match(testReg)) // null
  testStr = 'hi tdddhi';
  console.log(testStr.match(testReg)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log("------------\n")

  testReg = /\b(a\w*)\b/ // 匹配以a开头的单词,先是某个单词开始处(\b)，然后是字母a,然后是任意数量的字母或数字(\w*)，最后是单词结束处(\b)
  testStr = "axxx axx xxxa xax";
  console.log("match", testStr.match(testReg)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log("search", testStr.search(testReg)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log("replace", testStr.replace(testReg, 111)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log("exec", testReg.exec(testStr)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log("------------\n")

  // 1. /g 表示该表达式将用来在输入字符串中查找所有可能的匹配，返回的结果可以是多个。如果不加/g最多只会匹配一个
  // 2. /i 表示匹配的时候不区分大小写
  // 3. /m 表示多行匹配，什么是多行匹配呢？就是匹配换行符两端的潜在匹配。影响正则中的^$符号
  testReg = /\b(a\w*)\b/gim // g 全局匹配 + 忽略大小写
  testStr = "Axxx axx xx \n xa xax";
  console.log("----g i m----\n")
  console.log(testStr)
  console.log("match", testStr.match(testReg))
  console.log("search", testStr.search(testReg))
  console.log("replace", testStr.replace(testReg, 111))
  console.log("exec", testReg.exec(testStr))

  testStr = "www.baidu./com";
  testReg = /\.\//g
  console.log("----- 转义 ------\n")
  console.log("match", testStr.match(testReg))
  console.log("search", testStr.search(testReg))
  console.log("replace", testStr.replace(testReg, 111))
  console.log("exec", testReg.exec(testStr))

  testStr = "abcabcabcabccdf";
  testReg = /abc*/g
  /* +是和*类似的元字符，不同的是*匹配重复任意次(可能是0次)，而+则匹配重复1次或更多次 */
  console.log("----- 重复 * ------\n")
  console.log("match", testStr.match(testReg))
  console.log("search", testStr.search(testReg))
  console.log("replace", testStr.replace(testReg, 111))
  console.log("exec", testReg.exec(testStr))

  testStr = "acdf";
  testReg = /abc*/g
  console.log("----- 重复 * ------\n")
  console.log("match", testStr.match(testReg))
  console.log("search", testStr.search(testReg))
  console.log("replace", testStr.replace(testReg, 111))
  console.log("exec", testReg.exec(testStr))


  function connectorCaseToUpperCase(str) {
    let reg = /-([a-z])/;
    let result = str.replace(reg, function (m, m1) {
      return m1.toUpperCase();
    });
    return result;
  }
  let result = connectorCaseToUpperCase('case-apple');
  console.log('连接符 "-" 转换',result)


  console.log(`-------匹配任何一个元音字母-------`)
  testReg = /[aeiou]/
  testStr = 'sdsddfi';
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, 'replaceStr'))
  console.log(testReg.exec(testStr))


  console.log(`--------匹配电话号码的一个例子-----------`);
  testReg = /\(?0\d{2}[)-]?\d{8}/;
  testStr = '(010)88886666';
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, 'replaceStr'))
  console.log(testReg.exec(testStr))
  testStr = '010-88886666';
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, 'replaceStr'))
  console.log(testReg.exec(testStr))
  testStr = '01088886666';
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, 'replaceStr'))
  console.log(testReg.exec(testStr))
  /** 上面的正则也能匹配010)12345678
   * 或(022-87654321这样的“不正确”的格式
   * 故不严谨,应该是有括号后面也需要跟
   */

  /*    常用的反义代码
  * 代码/语法	            说明
  * \W 	    | 匹配任意不是字母和数字的字符
  * \S	    | 匹配任意不是空白符的字符
  * \D	    | 匹配任意非数字的字符
  * \B	    | 匹配不是单词开头或结束的位置
  * [^x]    |	匹配除了x以外的任意字符
  * [^aeiou]| 匹配除了aeiou这几个字母以外的任意字符
  */
  console.log(`-----------反义-------`);
  testReg = /[^x]/g
  testStr = `axios`;
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, 'replaceStr'))
  console.log(testReg.exec(testStr))
  console.log('\\B');
  testReg = /\B/g
  testStr = `axi - os`;
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, '-replaceStr-'))
  console.log(testReg.exec(testStr))


  console.log(`-----------不同规则使用 | 分割-------`);
  /** 第一条规则会优先匹配,
  * 第一条规则匹配完成则第二条规则不会匹配 
  */
  //这里第二条规则没有开头没有写0
  testReg = /0\d{2}-\d{8}|\d{3}-\d{7}/;
  testStr = "0755-5332214";
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, '-replaceStr-'))
  console.log(testReg.exec(testStr))
  console.log(`---------`)
  testReg = /0\d{2}-\d{8}|0\d{3}-\d{7}/
  testStr = "055-12345678";
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, '-replaceStr-'))
  console.log(testReg.exec(testStr))
  console.log(`---------`)
  testReg = /0\d{2}-\d{8}|0\d{3}-\d{7}/
  testStr = "0556-1234567";
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, '-replaceStr-'))
  console.log(testReg.exec(testStr))

  console.log(`--------IP正则匹配----------`);
  testReg = /(\d{1,3}\.){3}\d{1,3}/
  testStr = `10.3.44.66`;
  // \d{1,3}代表1到3位的数字，
  // (\d{1,3}\.}{3}代表三位数字加上一个英文句号(这个整体也就是这个分组)重复3次，
  // 最后再加上一个一到三位的数字(\d{1,3})。
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, '-replaceStr-'))
  console.log(testReg.exec(testStr))
  //它也将匹配256.300.888.999这种不可能存在的IP地址(IP地址中每个数字都不能大于255)

  console.log(`-----正确的编写方式---`)
  testReg = /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/
  testStr = `256.300.888.999`;
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, '-replaceStr-'))
  console.log(testReg.exec(testStr))

  console.log(`--------`)
  testStr = `11.234.5.77`;
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, '-replaceStr-'))
  console.log(testReg.exec(testStr))
  console.log(testReg.test(testStr))

  testStr = `011.234.05.77`;
  console.log(`--------`)
  console.log(testStr.match(testReg))
  console.log(testStr.search(testReg))
  console.log(testStr.replace(testReg, '-replaceStr-'))
  console.log(testReg.exec(testStr))
  console.log(testReg.test(testStr))





}


export function regReplace() {

}

export default {
  regTest,
  regReplace,
}