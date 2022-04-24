let weights = [35, 30, 60, 50, 40, 10, 25]
let values = [10, 40, 30, 50, 35, 40, 30]
let C = 150

const Objects = weights.map((w, i) => [w, values[i], 0])


// 寻找价值最高的
function chooseFun1() {
	let index = -1;
	let maxPrice = 0;

	for (let i = 0; i < Objects.length; i++) {
		const value = Objects[i][0]
		const status = Objects[i][2]
		if (status === 0 && value > maxPrice) {
			maxPrice = value
			index = i
		}
	}

	return index;
}
// 选重量最轻的
function chooseFun2() {
	let index = -1;
	let minWeight = 10 ** 8;

	for (let i = 0; i < Objects.length; i++) {
		const weight = Objects[i][0]
		const status = Objects[2]
		if (status === 0 && weight < minWeight) {
			minWeight = weight
			index = i
		}
	}

	return index;
}


// 选价值密度高的
function chooseFun3() {
	let index = -1;
	let maxDensity = 0;

	for (let i = 0; i < Objects.length; i++) {
		const weight = Objects[i][0]
		const status = Objects[2]
		const value = Objects[i][0]
		const density = value / weight;

		if (status === 0 && density > maxDensity) {

			maxDensity = density;
			index = i;
		}
	}
	return index
}


function greedyAlgo (weights) {
	// 开始装入背包，按策略，装到不能装为止
	let totalWeight = 0
	let _weights = [...weights]

	while (totalWeight < C){
		// if() {

		// }
	}
}