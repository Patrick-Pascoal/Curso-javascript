//18. Faça um algoritmo que receba a idade de 75 pessoas e mostre mensagem informando "maior de idade"
// e "menor de idade" para cada pessoa. Considere a idade a partir de 18 anos como maior de idade.


function ageofmajority(age) {
    let smaller = []
    let bigger = []

    for (let i = 0; i < age.length; i++) {
        if (age[i] >= 18) { bigger.push(age[i] + " Maior de idade") }
        else { smaller.push(age[i] + " Menor de idade") }

    }
    return smaller + bigger

}

let ages = [18, 2, 10, 4]

const result = ageofmajority(ages)

console.log(result)