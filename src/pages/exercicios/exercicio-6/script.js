//Faça um algoritimo que receba idade de 8 pessoas e mostre mensagem maior e menor de idade para pessoa.
//considerando maior de idade a partir de 18 anos foreach

function idade(numeros) {
    let status = []

    numeros.forEach(function (item) {
        if (item >= 18) {
            status.push("Maior de idade " + item)
        }
        else {
            status.push("Menor de idade " + item)
        }
    })
    return status
}


let lista = [12, 10, 15, 1854, 7]
console.log(idade(lista))

const listaFiltrada = lista.filter(function (item) {
    return item < 15
})

console.log(listaFiltrada)

lista.forEach((item, index) => {
    lista[index] = item + 2
})
console.log(lista)


const listaMap = lista.map((item, index) => {
    return { valor: item }
})
console.log(listaMap[0].valor)



let casa = ["mesa", "computador", "cama"]

casa.pop()
casa.pop()
casa.push("pessoas", "geladeira")



console.log(casa)

casa.filter((item) => {
    item = !"mesa"
})

console.log(casa)