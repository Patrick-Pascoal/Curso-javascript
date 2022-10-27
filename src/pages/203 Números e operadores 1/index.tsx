import "./style.css";

type numprops = {
  idade: number;
};

export function NumeroseOperadores1(props: numprops) {
  var idade = 23;

  console.log(idade);

  var soma = 10 + 5 + 6 + 7 + 3 + 8 + 9;

  return (
    <div>
      <h1>Numeros e Operadores 1</h1>
    </div>
  );
}
