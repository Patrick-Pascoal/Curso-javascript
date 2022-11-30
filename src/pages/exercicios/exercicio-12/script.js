//21. Escrever um algoritmo que leia os dados de "N" pessoas (nome, sexo, idade e saúde) e 
//informe se está apta ou não para cumprir o serviço militar obrigatório. Informe os totais.
//maior de 18 
// sexo masculino
// saude ok

function enlistment(people) {
    const approvedPeolple = people.filter((people) => people.age >= 18 && people.age < 60 && people.genre === "M" && people.health === true)
    return approvedPeolple
}



const people = [
    {
        name: "Patrick",
        age: 29,
        genre: "M",
        health: true
    },
    {
        name: "Erick",
        age: 27,
        genre: "M",
        health: true
    },
    {
        name: "Eliane",
        age: 52,
        genre: "F",
        health: false
    },
    {
        name: "Luis",
        age: 57,
        genre: "M",
        health: false
    },
]

const result = enlistment(people)

console.log(result)