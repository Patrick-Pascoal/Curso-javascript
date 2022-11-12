//Crie um algoritimo que receba valores e mostre a quantidade que esta entre 10 e 150

function receba(valores){
    let quantidade=0
    for(let i=0; i<=valores.lenght; i++){
        if (valores[i] >=10 && valores[i]<=150){
            quantidade=quantidade+1
        }
    }
    return quantidade

}
let numeros=[1,25,45,58,444]
receba(numeros)

console.log(receba(numeros))