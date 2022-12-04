// 9. Faça um algoritmo que receba um valor que foi depositado e exiba o valor com rendimento 
//após um mês. Considere fixo o juro da poupança em 0,70% a. m.

function savingsIncome(value) {
    const incomeValue = (value * 0.70 / 100) + value
    return incomeValue
}

const result = savingsIncome(100)

console.log(result)
