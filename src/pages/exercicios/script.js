var fruta=0
var frutas=["banana","laranja","pera","limão"]

while(fruta<frutas.length) { var frutaTotal=frutas[fruta]; console.log(frutas[fruta-1]); fruta++;}

for(var i=0; i<10; i++){console.log(i,"PATRICK")}


frutas.forEach(function(fruta,quant,item ){console.log(fruta,quant,item)
})


console.log(frutas.pop())       // Ao ultilizar o .pop ele mostra o ultimo item da lista e remove o ultimo item 


console.log(frutas)


var jogos=["mario","street fight", "mario kart"]

jogos.forEach(function(jogo,item){
    console.log(jogo,item)
})

console.log(jogos[jogos.length-1]) //aqui mostrei o ultimo item da lista sem remover ele da lista original 

jogos.forEach(function(jogo){console.log(jogo)}) // ultilizei foreach para mostrar os itens dentro de jogos( e o ultimo item não foi removido)
