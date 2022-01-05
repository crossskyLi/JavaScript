let str = 'asdfj2\n2222\na';
let replaceStr = 'test';
let reg = /^a/mg

const replace = (target = str, rStr = replaceStr, Reg = reg) => target.replace(Reg, (e) => {
	return rStr
})

// console.log(replace(undefined, undefined, reg))

reg = /^a/m
// console.log(replace(undefined, undefined, reg))

// *
// str = 'A ghost boooooed'
// reg = /o*/g;
// console.log(replace(str, '&', reg))

// reg = /o{1}/g;
// console.log(replace(str, '&', reg))
// reg = /o{1}/
// console.log(replace(str, '&', reg))

// reg = /o{1,10}/g;
// console.log(replace(str, '&', reg))

// &A& &g&h&&s&t& &b&&e&d&
// A gh&st b&&&&&ed
// A gh&st b&ed

// str = 'foool'
// reg = /o+/
// console.log(replace(str, '&', reg))


// 像下面的例子展示的那样，它会匹配 'x' 并且记住匹配项。其中括号被称为捕获括号。
// 模式 /(foo) (bar) \1 \2/ 中的 '(foo)' 和 '(bar)' 匹配并记住字符串 "foo bar foo bar" 中前两个单词。
// 模式中的 \1 和 \2 表示第一个和第二个被捕获括号匹配的子字符串，即 foo 和 bar，
// 匹配了原字符串中的后两个单词。注意 \1、\2、...、\n 是用在正则表达式的匹配环节，详情可以参阅后文的 \n 条目。
// 而在正则表达式的替换环节，则要使用像 $1、$2、...、$n 这样的语法，例如，'bar foo'.replace(/(...) (...)/, '$2 $1')。$& 表示整个用于匹配的原字符串。
reg = /(foo) (bar) \1 \2/
console.log(reg.test('foo bar foo bar'))


reg = /(?:foo){1,2}/g

console.log(replace('foo1a foofooaa 222 11 1', '_', reg))
