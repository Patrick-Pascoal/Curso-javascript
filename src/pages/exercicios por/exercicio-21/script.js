//21. Escrever um algoritmo que leia os dados de "N" pessoas (nome, sexo, idade e saúde) 
//e informe se está apta ou não para cumprir o serviço militar obrigatório. Informe os totais.

function militaryService(person) {
    const approveds = person.filter((people) => people.age >= 18 && people.age < 60 && people.health === true)
    const names = approveds.map((item) => item.name)
    return { aprovados: approveds, nomeDosAprovados: names }
}


const people = [{
    name: "Patrick",
    gender: "M",
    age: 29,
    health: true
}, {
    name: "Lorraine",
    gender: "F",
    age: 26,
    health: true

}, {
    name: "Heitor",
    gender: "M",
    age: 10,
    health: true
}]

const result = militaryService(people)
console.log(result)