// 斐波那契数列
// fib(n) = fib(n - 1) + fib(n - 2)

function fib(n) {
	let fibn_1 = 0
	let fibn_2 = 1
	if (n === 0) { return fibn_1 }
	if (n === 1) { return fibn_2 }

	let i = 2
	let result = fibn_1 + fibn_2;
	while (i <= n) {
		result = fibn_1 + fibn_2;
		fibn_1 = fibn_2;
		fibn_2 = result;
		i++
	}

	return result
}

