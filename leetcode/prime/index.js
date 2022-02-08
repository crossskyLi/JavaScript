function isPrime(n) {
	if (n === 2 || n === 3) return true
	if (n % 2 === 0 || n % 3 === 0) return false
	for (var i = 5; i * i <= n; i += 6) {
		if (n % (i + 2) === 0 || n % i === 0) {
			return false
		}
	}
	return true
}
function prime(n) {
	if (n <= 2) return [2, 3][n - 1]
	let m = 2
	let i = 5
	let r
	while (m < n) {
		if (isPrime(i)) {
			m++
			if (m === n) {
				r = i
				break;
			}
		}
		if (isPrime(i + 2)) {
			m++
			if (m === n) {
				r = i + 2
				break;
			}
		}
		i += 6
	}
	return r;
}

function log(n) {
	let i = 1;
	while (i < n) {
		console.log(prime(i))
		i++
	}
}
log(100)