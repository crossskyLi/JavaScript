/* 8 x 8 的棋盘 放入 随机数个1 查看棋盘会不会有可能出现 同一行或者同一列出现两个以上的 1 */


function getChessArr(length) {
  const arr = [];
  let _length = length || 8

  for (let i = 0; i < _length; i++) {
    let row = new Array(_length).fill(1).map(() => Math.random() > 0.9 ? 1 : 0)
    arr.push(row)
  }

  return arr
}

let arr = getChessArr(8)

function judge(arr) {
  let _length = arr.length || 8
  for (let i = 0; i < _length; i++) {
    const row = arr[i];
    let resultX = 0;
    let resultY = 0;
    for (let j = 0; j < row.length; j++) {
      resultX += row[j]
      resultY += arr[j][i]
      if (resultX >= 2 || resultY >= 2) {
        return true
      }
    }
  }
  return false
}

/* 八皇后问题 
八皇后问题，是一个古老而著名的问题，该问题最早由国际西洋棋棋手马克斯·贝瑟尔(Max Bezzel)于1848年提出。
八皇后问题的具体描述为：在8*8的国际象棋上摆放8个皇后，使其不能互相攻击，
即任意两个皇后都不能处于同一行、同一列或同一斜线上，问有多少种摆法。
同一行
同一列
同一斜线
*/
function eightQueen(arr, cnt) {
  //parameters
  this.arr = arr;
  this.cnt = cnt;

  //methods
  this.search = function (r) {
    //if r == 8, then a solution is found
    if (r == 8) {
      document.write('<br>' + this.cnt + '<br>');
      this.output(this.arr);
      this.cnt++;
      return null
    }
    for (var i = 0; i < 8; i++) {
      this.arr[r] = i;// 第 r 行 赋值 i
      let flag = 1
      for (var j = 0; j < r; j++) {
        // 跟之前添加在 arr 中的数字作比较
        // check if this position is valid
        // 第 r 行 的纵坐标是不是前面已经取到的纵坐标是否相同 列相碰 [4,4] 
        // 排除斜线的情况 [1,2] 
        if (this.arr[r] == this.arr[j] || r - j == Math.abs(this.arr[r] - this.arr[j])) {
          flag = 0;
          break;
        }
      }
      // if flag == 1, then the row numbered r is valid
      if (flag) this.search(r + 1); //search the next row
    }
  }
  //output the valid solutions in format
  this.output = function (arr) {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        pos = (j == arr[i]) ? '1 ' : '0 ';
        document.write(pos);
      }
      document.write('<br>');
    }
  }
}

//Initial array
var arr1 = [-1, -1, -1, -1, -1, -1, -1, -1]
//create a object
var eq = new eightQueen(arr1, 1);
//use object's method to find all solutions and print them
eq.search(0);
