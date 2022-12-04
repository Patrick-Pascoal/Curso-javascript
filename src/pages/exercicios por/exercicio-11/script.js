//11. Faça um algoritmo que receba o preço de custo de um produto e mostre o valor de venda. 
//Sabe-se que o preço de custo receberá um acréscimo de acordo com um percentual informado 
//pelo usuário.

function percetage(value, percetage) {
    const result = (value * percetage / 100) + value

    return result
}


const result = percetage(100, 10)

console.log(result)