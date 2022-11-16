//Faça um algoritimo que receba idade de 8 pessoas e mostre mensagem maior e menor de idade para pessoa.
//considerando maior de idade a partir de 18 anos

function idade(idad){
    let statusIdade=[]
    for(let i=0; i<=7; i++){

        if (idad[i]>=18){statusIdade[i]="maior de idade " + idad[i]}
        else{statusIdade[i]="menor de idade "+ idad[i]}
    
       }
       return statusIdade
   
}

let idades=[1,12,14,2,13,77,98,4]

console.log(idade(idades))