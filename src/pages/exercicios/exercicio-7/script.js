//Escreva algoritimo que receba nome e sexo e no final infrome se e homem ou mulher e no final mostre a quantidade de home e muler

function nomeSexo(feminino, masculino) {
    let mas = 0
    let fem = 0

    for (let i = 0; i <= masculino.length; i++) {
        mas = i
    }
    feminino.forEach((item) => {
        if (item != 0) { fem += 1 }

    }); return "Feminino=" + fem + " " + "Masculino=" + mas
}

let sexoFeminino = ["ana", "ellen"]
let sexoMasculino = ["luiz", "izaias", "Rafael"]
console.log(nomeSexo(sexoFeminino, sexoMasculino))