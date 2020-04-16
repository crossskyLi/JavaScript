// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

// 示例:
// board = [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
//   ]

// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false

// 链接：https://leetcode-cn.com/problems/word-search

var exist = function (board, word) {
  const rowNum = board.length;
  const colNum = board[0].length;

  for (let i = 0; i < rowNum; ++i) {
    for (let j = 0; j < colNum; ++j) {
      if (board[i][j] === word[0]) {
        const isExist = __exist(board, word, i, j, {});
        if (isExist) return true; // 找到就返回
      }
    }
  }
  return false;
};
/**
 * @param {character[][]} board
 * @param {string} word
 * @param {number} row
 * @param {number} col
 * @param {object} visited
 * @return {boolean}
 */
function __exist(board, word, row, col, visited) {
  // 单词中字母全部匹配，说明可以搜索到，返回true
  if (!word.length) {
    return true;
  }

  const key = `${row}-${col}`;
  // 越界、之前访问过、单词首字母和当前元素不相同，返回false
  if (
    row >= board.length ||
    row < 0 ||
    col >= board[0].length ||
    col < 0 ||
    visited[key] ||
    board[row][col] !== word[0]
  ) {
    return false;
  }

  visited[key] = true;
  word = word.slice(1);
  // 下、上、右、左搜索（顺序不重要）
  const success =
    __exist(board, word, row + 1, col, visited) ||
    __exist(board, word, row - 1, col, visited) ||
    __exist(board, word, row, col + 1, visited) ||
    __exist(board, word, row, col - 1, visited);

  visited[key] = success;
  return success;
}