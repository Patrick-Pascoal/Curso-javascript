//21. Escrever um algoritmo que leia os dados de "N" pessoas (nome, sexo, idade e saúde) e 
//informe se está apta ou não para cumprir o serviço militar obrigatório. Informe os totais.





function serviçoMilitar(pessoas) {
    const pessoasAprovadas = pessoas.filter((pessoa) => pessoa.idade >= 18 && pessoa.saude === "apto(a)" && pessoa.sexo === "m")
    return pessoasAprovadas;
}

let pessoasData = [
    {
        nome: 'Patrick',
        sexo: 'm',
        idade: 29,
        saude: 'apto(a)'
    },
    {
        nome: 'Lorraine',
        sexo: 'f',
        idade: 26,
        saude: 'apto(a)'
    },
    {
        nome: 'Heitor',
        sexo: 'm',
        idade: 16,
        saude: 'apto(a)'
    }
]

console.log(serviçoMilitar(pessoasData))


