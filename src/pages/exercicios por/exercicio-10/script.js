//10. A Loja Mamão com Açúcar está vendendo seus produtos em 5 (cinco) prestações
// sem juros. Faça um algoritmo que receba um valor de uma compra e mostre o valor das 
//prestações.

function installment(installment) {
    const installments = installment / 5
    return "5 installments of " + installments

}

const result = installment(200)

console.log(result)
