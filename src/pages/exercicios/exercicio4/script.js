//Crie um algoritimo que receba valores e mostre a quantidade que esta entre 10 e 150 ultilizando foreach



    




 
function receba(valores){
  let quantidade=0 


 valores.forEach(function(item){if(item>=10 && item<=150)
quantidade+=1})
return quantidade
 }
 let lista=[12,10,15,1854,7]

console.log(receba(lista))


