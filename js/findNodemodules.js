var fs = require('fs');
var path = require('path');

//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = path.resolve('/Users/liguanliang1/Desktop/workspace');

const arr = [22, 2, 1324, 45, 5, 46, 6, 546, 565, 34, 22, 1]
let target = []
arr.forEach((size) => { const data = { size }; insertArr(target, data) })

function insertArr(arr, data) {
	const { size, filedir } = data
	if (arr.length < 1) {
		arr.push(data)
		return
	}

	let i = arr.length - 1;
	if (size < arr[i].size) {
		arr.push(data)
		return
	}

	if (size > arr[0].size) {
		arr.unshift(data)
		return
	}

	while (size > arr[i].size) {
		if (size >= arr[i].size && size <= arr[i - 1].size) {
			target = [...target.slice(0, i - 1), data, ...target.slice(i - 1, target.length)]
			break
		}
		i--
	}

	// console.log(...target.slice(0,i))
	// target = [...target.slice(0,i), data, ...target.slice(i, target.length)]
}
console.log(target)
//调用文件遍历方法
// fileDisplay(filePath);
let count = 1;
/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
	//根据文件路径读取文件，返回文件列表
	fs.readdir(filePath, function (err, files) {
		if (err) {
			console.warn(err)
		} else {
			//遍历读取到的文件列表
			files.forEach(function (filename) {
				//获取当前文件的绝对路径
				var filedir = path.join(filePath, filename);
				//根据文件路径获取文件信息，返回一个fs.Stats对象
				fs.stat(filedir, function (eror, stats) {
					if (eror) {
						// console.warn('获取文件stats失败');
					} else {
						var isFile = stats.isFile();//是文件
						var isDir = stats.isDirectory();//是文件夹
						if (isFile) {
							// console.log(filedir);
						}
						if (isDir && /node_modules$/.test(filename)
							&& !/(sensed?|pro|ant|element)/g.test(filedir)
							&& stats.size / 1024 > 10) {
							console.log(filedir, stats.size);

						}
						if (isDir) {
							fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
						}
					}
				})
			});
		}
	});
}

// function getdirsize(dir, callback) {
// 	var size = 0;
// 	fs.stat(dir, function (err, stats) {
// 		if (err) return callback(err);//如果出错
// 		if (stats.isFile()) return callback(null, stats.size);//如果是文件

// 		fs.readdir(dir, function (err, files) {//如果是目录
// 			if (err) return callback(err);//如果遍历目录出错
// 			if (files.length == 0) return callback(null, 0);//如果目录是空的

// 			var count = files.length;//哨兵变量
// 			for (var i = 0; i < files.length; i++) {
// 				getdirsize(path.join(dir, files[i]), function (err, _size) {
// 					if (err) return callback(err);
// 					size += _size;
// 					if (--count <= 0) {//如果目录中所有文件(或目录)都遍历完成
// 						callback(null, size);
// 					}
// 				});
// 			}
// 		});
// 	});
// }

// getdirsize(filePath, (err, data) => {
// 	if (err) { return 1 }
// 	console.log(data / 1024 / 1024)
// })