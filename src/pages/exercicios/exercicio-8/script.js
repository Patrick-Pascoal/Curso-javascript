// 20. A concessionária de veículos "CARANGO VELHO" está vendendo os seus veículos com desconto. Faça um algoritmo que 
//calcule e exiba o valor do desconto e o valor a ser pago pelo cliente de vários carros. O desconto deverá ser calculado 
//de acordo com o ano do veículo. Até 2000- 12% e acima de 2000 - 7%. O sistema deverá perguntar se deseja continuar calculando 
//desconto até que a resposta seja: "(N) Não". Informar total de carros com ano até 2000 e total geral.


function carDesconto(anos, preços) {
    let i = 0
    let desconto = []
    while (anos[i] != "n") {
        if (anos[i] <= 2000) { desconto[i] = preços[i] * 12 / 100 }
        else { desconto[i] = preços[i] * 12 / 100 }; i++


    }
    return desconto

}

let ano = [2000, 1993, 1995, 1998, "n", 3000]
let preços = [10000, 25000, 32000, 14000, 21000]

console.log(carDesconto(ano, preços))






/*

let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let c = 0

while (i[c] < 10) {
    console.log(c)
        ; c++
} */