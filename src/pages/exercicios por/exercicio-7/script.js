//7. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. 
//A fórmula de conversão é: F=(9*C+160) / 5, sendo F a temperatura em Fahrenheit
// e C a temperatura em Celsius.

function celsiustoFahrenheit(celsius) {
    const f = (9 * celsius + 160) / 5

    return f

}


const result = celsiustoFahrenheit(2)

console.log(result)