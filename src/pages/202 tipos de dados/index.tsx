import "./style.css";

export function TiposdeDados() {
  var nome = "andre";
  var idade = 28;
  var simbolo = Symbol();
  console.log(nome + idade + typeof simbolo);
  var nome1 = "Patrick ",
    sobreNome = "Pascoal",
    nomeCompleto = nome1 + sobreNome;

  console.log(nomeCompleto);

  var gols = 1000;
  var frase = "romario fez" + gols + "gols";

  console.log(frase);

  var ano = "2018";
  var mes = 8;

  console.log(ano + mes);

  var melhor = "teste";
  var frase1 = "esse é o'" + melhor + 'dasda " e " sdfs" jogo';

  console.log(frase1);

  return (
    <div>
      <h1>Tipos de dados</h1>
    </div>
  );
}
