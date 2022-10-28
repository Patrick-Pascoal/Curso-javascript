export function Booleanecondicionais1() {
  var minhaIdade = 28;
  var idadePrimo = 25;

  if (minhaIdade > idadePrimo) {
    console.log("e maior");
  }
  var expressao = 5 - 2 && 5 - 8 && 5 - 2;
  console.log(expressao);

  var Gato = "Gato";
  if (Gato === "gato" && 5 > 2) {
    console.log("Verdadeiro");
  } else {
    console.log("Falso");
  }

  if (Gato === "gato" || 5 > 2) {
    console.log("Gato" && "Cão");
  } else {
    console.log("Falso");
  }

  var corFavorita = "Verde";

  switch (corFavorita) {
    case "Azul":
      console.log("Olhe para o céu.");
      break;
    case "Amarelo":
      console.log("Olhe para o sol.");
      break;
    case "Verde":
      console.log("Olhe para a floresta");
      break;
    default:
      console.log("Feche os olhos.");
  }
  return <div></div>;
}
