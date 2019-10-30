export function parseParam(url) {
  // 正则解析出 ? 后面的内容
  // 对后面的内容split &
  // split =
  // 兼容没有= 的key
  const reg = /.+\?(.+)$/;
  const paramStr = reg.exec(url)[1];
  const obj = {};
  paramStr.split('&').forEach((keyValueStr) => {
    let [key, value] = keyValueStr.split('=');
    if (Object.prototype.toString.call(value) !== '[object Undefined]') {
      value = encodeURIComponent(value);
      value = /^\d+$/.test(value) ? parseFloat(value) : value
      if (obj.hasOwnProperty(key)) {
        obj[key] = [].concat(obj[key], value)
      } else {
        obj[key] = value;
      }
    } else {
      obj[key] = true;
    }
  })
}
(() => {
  const url = "http://www.badd.com?a=2&b&a=%22&a=22"
  parseParam(url)
})()