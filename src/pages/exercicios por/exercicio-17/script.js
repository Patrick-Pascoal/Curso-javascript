//17. Ler 80 números e ao final informar quantos número(s) est(á)ão no intervalo entre 10 
//(inclusive) e 150 (inclusive).

function interval(value) {
    let result = 0
    for (let i = 1; i < 80; i++) {
        if (value[i] >= 10 && value[i] <= 150) {
            result++
        }
    }
    return result

}

const list = [1, 9, 10, 150, 149, 151]

const result = interval(list)
console.log(result)