//8. Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor 
//lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também 
//a quantidade de dólares disponíveis com o usuário.

function dolartoReal(quotation, valueinDolar) {
    const valueinReal = valueinDolar * quotation

    return valueinReal

}

const result = dolartoReal(5.19, 2)

console.log(result)