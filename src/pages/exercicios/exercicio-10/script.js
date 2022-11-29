//21. Escrever um algoritmo que leia os dados de "N" pessoas (nome, sexo, idade e saúde) e 
//informe se está apta ou não para cumprir o serviço militar obrigatório. Informe os totais.
//maior de 18 
// sexo masculino
// saude ok


function validateEnlistment(candidates) {
  const approved = []
  candidates.forEach((candidate) => {
    if (candidate.age >= 18 && candidate.age < 60 && candidate.health === true && candidate.gender === "M") {
      approved.push(candidate)
    }
  })
  return approved

}


const people = [
  {
    name: "Patrick",
    gender: "M",
    age: 29,
    health: true
  },
  {
    name: "Erick",
    gender: "M",
    age: 27,
    health: true
  },
  {
    name: "Eliane",
    gender: "F",
    age: 52,
    health: false
  },
  {
    name: "Luis",
    gender: "M",
    age: 57,
    health: false
  },
]

const result = validateEnlistment(people)

console.log(result)