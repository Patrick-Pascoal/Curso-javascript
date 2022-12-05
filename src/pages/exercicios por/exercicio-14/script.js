//14. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual é o maior.

function biggerandsmaller(valueA, valueB) {
    if (valueA > valueB) {
        return "Valor Maior = " + valueA
    } else {
        return "Valor maior = " + valueB
    }
}

const result = biggerandsmaller(54, 6)

console.log(result)