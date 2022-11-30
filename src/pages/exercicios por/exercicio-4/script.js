//4. Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas 
//efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas
// vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.


function salarySales(sellers) {
    const seller1 = sellers.map((seller) => {
        seller.cashSales = seller.cashSales * 15 / 100
        return seller

    })
    return seller1
}



const seller = [{
    name: "Luis",
    salary: 1200.00,
    cashSales: 3000.00,

},
{
    name: "Pablo",
    salary: 1200.00,
    cashSales: 5000.00,

}]

const result = salarySales(seller)
console.log(result)