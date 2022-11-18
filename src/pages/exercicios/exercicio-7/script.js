//Escreva algoritimo que receba nome e sexo e no final infrome se e homem ou muler e no final mostre a quantidade de home e muler

function sexoMF(cadastro) {
    let masculino = []
    let feminino = []
    let i
    // let feminino = []
    cadastro.forEach((item, index) => {
        // console.log(nome[1])
        i = index % 2
        if (i === 0) {
            masculino[index] = item
        } else {
            feminino[index] = item
        }
        //console.log(masculino)
        // console.log(index)
    })
    return masculino
}


let nome = ["patrick", "masculino", "lorraine", "feminino", "kelvi", "masculino"]

console.log(sexoMF(nome))
/*

let lista = ["lorraine", "feminino", "patrick", "Masculino"]

console.log(lista.includes("feminino", 1))


console.log(lista[0 + 2])*/


let sma = 4 % 2
console.log(sma)