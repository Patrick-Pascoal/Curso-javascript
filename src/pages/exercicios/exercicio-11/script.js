//21. Escrever um algoritmo que leia os dados de "N" pessoas (nome, sexo, idade e saúde) e 
//informe se está apta ou não para cumprir o serviço militar obrigatório. Informe os totais.
//maior de 18 
// sexo masculino
// saude ok

function validatesEnlistment(people) {
  const approved = []
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18 && people[i].age < 60 && people[i].gender === "M" && people[i].health === true) {
      approved.push(people[i])
    }
  }
  return approved
}





const people = [
  {
    name: "Patrick",
    age: 29,
    gender: "M",
    health: true

  },
  {
    name: "Erick",
    age: 17,
    gender: "M",
    health: true

  },
  {
    name: "Eliane",
    age: 52,
    gender: "F",
    health: false

  },
  {
    name: "Luis",
    age: 57,
    gender: "M",
    health: false

  }
]

const result = validatesEnlistment(people)

console.log(result)