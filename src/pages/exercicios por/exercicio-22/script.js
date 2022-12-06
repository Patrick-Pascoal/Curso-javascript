//22. Faça um algoritmo que receba o preço de custo e o preço de venda de 40 produtos. 
//Mostre como resultado se houve lucro, prejuízo ou empate para cada produto. Informe media de
// preço de custo e do preço de venda.

function profitSales(profitSales) {

    const list = profitSales.map((item) => {
        if (item.salesPrice < item.costPrice) { profit: "Prejuizo" } { profit: item.salesPrice - item.costPrice }
        return profit

        //  profit: (item.salesPrice - item.costPrice), averageCost: (item.costPrice + item.costPrice) / profitSales.length,
        // averageSale: (item.salesPrice - item.costPrice) / profitSales.length })
        // }}
        // )



    }}






const products = [{
    name: "produto 1",
    costPrice: 200,
    salesPrice: 300,
}, {
    name: "produto 2",
    costPrice: 245,
    salesPrice: 300,
},

]

console.log(profitSales(products))