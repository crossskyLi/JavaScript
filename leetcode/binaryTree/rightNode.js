function run(tree) {
	let arr = []
	let tempArr = [];

	const result = []
	if (tree) {
		arr = [tree]
	}
	let i = 0;
	while (arr.length && i < arr.length) {
		if (arr[i].left) tempArr.push(arr[i].left)
		if (arr[i].right) tempArr.push(arr[i].right)
		if (i === arr.length - 1) {
			result.push(arr[i].value)
			arr = tempArr;
			tempArr = []
			i = 0
		} else {
			i++
		}
	}
}