//algoritimo que calcule o desconto dos carros de acordo com o ano e pare o calculo apenas se 
//a resposta for N. dados para o calculo de desconto: Ano 2000 desconto de 12%, acima do ano 2000 desconto de 7%


function descontoCar(anos, preços) {
    let preço = preços
    let result = []
    let i = anos
    while (i != "n") {

        console.log(anos.length)
        if
            (i === "n" || i === "não") {
            break;


        } else if (i[i] <= 2000) {
            result[i] = preço[i] * 12 / 100


        } else {
            result[i] = preço[i] * 7 / 100

        }
        console.log(result)

        i++
    }

    return result
}

let anoCar = [2000, "n", 3000]
let precoCar = [5000, 10000, 50000]

console.log(descontoCar(anoCar, precoCar))