//16. Escrever um algoritmo que leia o nome e as três notas obtidas por um aluno durante o
// semestre. Calcular a sua média (aritmética), informar o nome e sua menção aprovado
// (media >= 7), Reprovado (media <= 5) e Recuperação (media entre 5.1 a 6.9).

function average(student) {
    student.filter((item) => {
        if (item.note1 >= 7) {
            item.note1 = item.note1 + " Media"
        } else if
            (item.note1 <= 5) {
            item.note1 = item.note1 + " Reprovado"
        }
        else if (item.note1 >= 5.1 && item.note1 <= 6.9) {
            item.note1 = item.note1 + " Recuperação"
        }


        if (item.note2 >= 7) {
            item.note2 = item.note2 + " Media"
        } else if
            (item.note2 <= 5) {
            item.note2 = item.note2 + " Reprovado"
        } else if (item.note2 >= 5.1 && item.note2 <= 6.9) {
            item.note2 = item.note2 + " Recuperação"
        } if

            (item.note3 >= 7) {
            item.note3 = item.note3 + " Media"
        } else if
            (item.note3 <= 5) {
            item.note3 = item.note3 + " Reprovado"
        } else if (item.note3 >= 5.1 && item.note3 <= 6.9) {
            item.note3 = item.note3 + " Recuperação"
        }

    })

    return student
}


const student = [
    {
        student: "Jose",
        note1: 10,
        note2: 5.1,
        note3: 10
    },
    {
        student: "João",
        note1: 10,
        note2: 3,
        note3: 5.1
    },
    {
        student: "Maria",
        note1: 10,
        note2: 10,
        note3: 5.1
    }
]

const result = average(student)

console.log(result)