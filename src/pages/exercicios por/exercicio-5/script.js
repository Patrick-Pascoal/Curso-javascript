//5. Escrever um algoritmo que leia o nome de um aluno e as notas das três provas que ele
// obteve no semestre. No final informar o nome do aluno e a sua média (aritmética).


function students(studentsData, student) {
    const note = []
    if (student === "Henrrique") {
        note[0] = studentsData[0]
    } else if (student === "Carlos") {
        note[0] = studentsData[1]
    }
    return note
}




const students1 = [
    {
        student: "Henrrique",
        note1: 20,
        note2: 25,
        note3: 32
    },
    {
        student: "Carlos",
        note1: 20,
        note2: 30,
        note3: 40
    }]

const result = students(students1, "Carlos")


console.log(result)