export function regTest() {
  console.log("%c START", 'color:#666;background: skyblue; padding:0 100px;')

  let testReg = /hi/;
  let testStr = 'ddhitdddhi'
  // 测试固定字符
  console.log(testStr.match(testReg))//["hi", index: 2, input: "ddhitdddhi", groups: undefined]

  testReg = /\bhi\b/// 元字符匹配 metacharacter
  testStr = 'ddhitdddhi';
  console.log(testStr.match(testReg)) // null
  testStr = 'hi tdddhi';
  console.log(testStr.match(testReg)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]

  testReg = /\b(a\w*)\b/ // 匹配以a开头的单词,先是某个单词开始处(\b)，然后是字母a,然后是任意数量的字母或数字(\w*)，最后是单词结束处(\b)
  testStr = "axxx axx xxxa xax";
  console.log(testStr.match(testReg)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log(testStr.search(testReg)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log(testStr.replace(testReg, 111)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log(testReg.exec(testStr)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]


  // 1. /g 表示该表达式将用来在输入字符串中查找所有可能的匹配，返回的结果可以是多个。如果不加/g最多只会匹配一个
  // 2. /i 表示匹配的时候不区分大小写
  // 3. /m 表示多行匹配，什么是多行匹配呢？就是匹配换行符两端的潜在匹配。影响正则中的^$符号
  testReg = /\b(a\w*)\b/gim // g 全局匹配 + 忽略大小写
  testStr = "Axxx axx xx \n xa xax";
  console.log(testStr)
  console.log(testStr.match(testReg)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log(testStr.search(testReg)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log(testStr.replace(testReg, 111)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]
  console.log(testReg.exec(testStr)) // ["hi", index: 0, input: "hi tdddhi", groups: undefined]

}


export default {
  regTest
}