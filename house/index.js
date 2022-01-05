
/**
 * 	@param input object // 输入
 * 	@param wage number // 每年工资能储蓄下来的钱 单位 w
 *  @param wageIncrease number // 工资每年涨幅 如 10%
 * 	@param price number // 房价 单位w
 * 	@param priceIncrease number // 房价每年涨幅 如 10%
 * 	@param downPaymentRate number // 首付比例 如 30%
 *  @returns output { year: number } // year 攒钱能购房的时间（年为单位） y 目标购房时间，从当前起，多少年后购房的目标
 * 
 *  首付的复合增长是 priceIncrease * downPaymentRate = 0.024，储蓄年均涨幅小于这个数字，即不可能追得上
 *  */
const input = {
	wage: 16, // 储蓄16w
	wageIncrease: 0.10, // 次年 增加储蓄的比例
	price: 500, // 房屋总价
	priceIncrease: 0.08, // 房价涨幅
	downPaymentRate: 0.3, // 首付比例
	totalYear: 5, // 能接受的买房截止时间
	impossible: true, // 是否可能买房
}
const output = ((input) => {
	const output = { ...input }

	const {
		downPaymentRate,
		price,
		wage,
		wageIncrease,
		priceIncrease,
		totalYear
	} = input

	let impossible = false; // 买房的可能性
	let savings = wage; // 初始储蓄
	let downPayment = price * downPaymentRate; // 第一年的首付
	let year = 1;
	let _wage = wage
	output.year = 0;
	while (!impossible) {
		year += 1;
		_wage += _wage * wageIncrease;
		savings = savings + _wage;
		downPayment = downPayment * (1 + priceIncrease);
		
		// 储蓄超过首付，认为可以买房，不考虑月供
		if (savings > downPayment) {
			output.year = year;
			output.impossible = false;
			output.savings = savings.toFixed(2);
			output.downPayment = downPayment.toFixed(2);
			output.conclusion = `你在 ${output.year} 年后买房， 首付款是${output.downPayment}。你还有希望。`;
			break;
		}
		if (year > totalYear) {
			output.impossible = true;
			impossible = true;
			output.savings = savings;
			output.downPayment = downPayment;
			output.conclusion = `你没办法买房了，接受现实吧`;
			break;
		}

	}
	console.table(output)

	return output
})(input)
