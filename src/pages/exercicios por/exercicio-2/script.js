// 2. Faça um algoritmo que receba dois números e ao final mostre a soma, subtração, multiplicação e a divisão dos números lidos.

function calculation(a, b) {
    const result = ["sum= " + (a + b), "decrease= " + (a - b), "multiplication= " + (a * b), "division= " + (a / b)]
    return result
}
const result = calculation(2, 2)

console.log(result)