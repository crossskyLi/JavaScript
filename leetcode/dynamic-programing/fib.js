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

// fib(n+3) = fib(n) + fib(n+1) + fib(n+2);

function tribonacci(n) {
	let fibn_1 = 0
	let fibn_2 = 1
	let fibn_3 = 1
	if (n === 0) { return fibn_1 }
	if (n === 1) { return fibn_2 }
	if (n === 2) { return fibn_3 }

	let i = 3
	let result = fibn_1 + fibn_2 + fibn_3;
	while (i <= n) {
		result = fibn_1 + fibn_2 + fibn_3;
		fibn_1 = fibn_2;
		fibn_2 = fibn_3;
		fibn_3 = result;
		i++
	}

	return result
}