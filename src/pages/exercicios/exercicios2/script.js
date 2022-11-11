
function soma(a,b){
    return a+b;

}
console.log(soma(1,8))

function resultCompleto(a,b){
    return "soma= "+ (a+b) +" subtração= "+ (a-b) +" divisão= "+ a/b + " Multiplicação= " + a*b
}

console.log(resultCompleto(8,4))

function kmCombustivel(distancia,gasolina){
    return "media de "+ distancia/gasolina +"km por litro"

}
console.log(kmCombustivel(200,5))

function salario(nome,salario,vendas){
    return "Nome: "+ nome +" Salario fixo: "+ salario + "porcentagem em cima do total de vendas: "+ (vendas*15/100)
}
let lista=["patrick", "asdfas"]

console.log(salario("patrik",1300, 1000))


function valoresinvertidos(a,b){
    return b +" "+ a
}

console.log(valoresinvertidos(7,8))

//6

function fahrenheit(celsius){
    return (9*celsius+160)/5
}
console.log(fahrenheit(20))

//13
function maiorQdez(a){
    if(a>10) return "maior que dez" 
}

console.log(maiorQdez(24))

//17 ler 4 numeros e dizer quantos estão entre 10 e 150

function recebe(a,b,c,d){
    let result=0
    if(a >=10 && a<=150 ){ 
             result=result+1
    }
    if(b >=10 && b<=150 ){ 
        result=result+1
}
if(c >=10 && c<=150 ){ 
    result=result+1
}
if(d >=10 && d<=150 ){ 
    result=result+1
}
return result

}

console.log(recebe(150,110,42,4))
    


function recebe1(numeros){
    let contador = 0

    
    for(let i = 0; i <= numeros.length; i++) {

        if(numeros[i] >= 10 && numeros[i] <= 150){
            contador=contador+1
        }
        console.log('numeros.length', numeros.length);
    }
    return contador
    
}

let listas=[100,15,50,2169,47];
console.log ('testeeeeew', recebe1(listas))



