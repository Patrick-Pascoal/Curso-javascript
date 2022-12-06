//19. Escrever um algoritmo que leia o nome e o sexo de 56 pessoas e informe o nome e se 
//ela é homem ou mulher. No final informe total de homens e de mulheres.

function nameGender(genderName) {
    const name = genderName.filter((item) =>
        item.sex === "M"


    )
    return name
}

const names = [{
    nome: "Erick",
    sex: "M"
},
{
    nome: "Fran",
    sex: "M"

},]

console.log(nameGender(names))