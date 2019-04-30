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

  // charCodeAt过滤中文字符串,可顺便反转字符串,几十万长度的字符串运行会在140ms左右
  const strFilterChinese = ((str, doTurn) => {
    let length = str.length;
    let result = '';
    if (doTurn) {
      for (let i = 0; i < length; i++) {
        if (str.charAt(i).charCodeAt() < 255) {
          result = `${str[i]}${result}`
        }
      }
      return result
    }
    for (let i = 0; i < length; i++) {
      if (str.charAt(i).charCodeAt() < 255) {
        result = `${result}${str[i]}`
      }
    };
    return result
  })

  // HTML5 对element 提供 classList ,并且提供以下API

  /* add(String[, String[, ...]])  */
  // Add specified class values. If these classes already exist in attribute of the element, then they are ignored.

  /* remove(String[, String[, ...]]) */
  // Remove specified class values.
  // Note: Removing a class that does not exist, does NOT throw an error.
  
  /* item(Number) */
  // Return class value by index in collection.

  /* toggle(String[, force]) */
  // When only one argument is present: Toggle class value; i.e., if class exists then remove it and return false, if not, then add it and return true.
  // When a second argument is present: If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.

    /* contains(String) */
  // Checks if specified class value exists in class attribute of the element.

  /* replace(oldClass, newClass) */
  // Replaces an existing class with a new class.
  
  const div = document.createElement('div');
  div.className = 'foo';

  // our starting state: <div class="foo"></div>
  console.log(div.outerHTML);

  // use the classList API to remove and add classes
  div.classList.remove("foo"); // 删除
  div.classList.add("anotherclass"); // 添加

  // <div class="anotherclass"></div>
  console.log(div.outerHTML);

  // if visible is set remove it, otherwise add it 有则删除,无则增加
  div.classList.toggle("visible");

  // add/remove visible, depending on test conditional, i less than 10
  // 后面的条件决定增加还是删除,true => 增加,如果已有,忽略, false,删除,如果没有,忽略
  div.classList.toggle("visible", i < 10);

  // contain 是否有某个类名
  console.log(div.classList.contains("foo"));

  // add or remove multiple classes
  div.classList.add("foo", "bar", "baz");
  div.classList.remove("foo", "bar", "baz");

  // add or remove multiple classes using spread syntax
  const cls = ["foo", "bar"];
  div.classList.add(...cls);
  div.classList.remove(...cls);

  // replace class "foo" with class "bar"
  div.classList.replace("foo", "bar");


  // 切换元素的className 写法
  // 鼠标移入
  function handleMouseEnter(event) {
    // 兼容IE7/8
    // if (event.target.className.indexOf('active') < 0) {
    //   event.target.className = `${event.target.className} active`;
    // }
    //  HTML5 写法
    event.target.classList.toggle('active');
  }

  // 鼠标移出
  function handleMouseleave(event) {
    // 兼容IE7/8
    // event.target.className = event.target.className.replace(' active', '');
    // HTML5 写法
    event.target.classList.remove('active');
  }
})()