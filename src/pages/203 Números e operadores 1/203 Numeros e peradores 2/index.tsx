export function NumeroseOperadores2() {
  // Qual o resultado da seguinte expressão?
  //var total:number = {10 + (5 * 2) / 2 + 20;}

  // Crie duas expressões que retornem NaN
  // var expressao1 = "Teste" / 2;
  // var expressao2 = "Teste" - 2;
  // console.log(expressao1, expressao2);

  // Somar a string '200' com o número 50 e retornar 250
  var soma = +"200" + 50;
  console.log(soma);

  // Incremente o número 5 e retorne o seu valor incrementado
  var x = 5;
  console.log(++x);

  // Como dividir o peso por 2?
  var numero = +"80" / 2;
  var unidade = "kg";
  var peso = numero + unidade; // '80kg'

  var total1 = 10 + 5 + 10;
  var divisao = 100 / 5;
  var modulo = 3872983892 % 3;
  console.log(total1);
  console.log(divisao);
  console.log(modulo);

  var soma1 = 10 + 10 + 20 + (30 * 4) / (2 + 10);
  console.log(soma1);

  var x = 5;
  console.log(x--);
  console.log(x);

  var idade = +"28";
  var somaIdade = -5;
  console.log(somaIdade);
  console.log(idade);

  console.log(peso);
  return <div>{peso}</div>;
}
