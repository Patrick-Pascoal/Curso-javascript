import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NumeroseOperadores1 } from "./pages/203 Números e operadores 1";
import { NumeroseOperadores2 } from "./pages/203 Números e operadores 1/203 Numeros e peradores 2";
import { Trening } from "./pages/201/201";
import { Booleanecondicionais1 } from "./pages/204 Boolean e condiçionais 1";
import { Booleanecondicionais2 } from "./pages/204 Boolean e condiçionais 1/Boolean e concicionais 2";
import { Funcao } from "./pages/205 funções 1";

function App() {
  return (
    <div>
      <NumeroseOperadores2 />
      <Trening />
      <Booleanecondicionais1 />
      <Booleanecondicionais2 />
      <Funcao />
    </div>
  );
}

export default App;
