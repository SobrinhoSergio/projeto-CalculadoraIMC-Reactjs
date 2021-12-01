import { useState } from "react";
import "./App.css";

import TabelaIMC from "./components/TabelaIMC";
import Peso from "./components/Peso";
import Altura from "./components/Altura";
import CalcularIMC from "./components/CalcularIMC";
import Resultado from "./components/ResultadoIMC";

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <main className="container">
      <Peso p={peso} sp={setPeso} />
      <Altura a={altura} sa={setAltura} />
      <CalcularIMC p={peso} a={altura} sr={setResultado} />
      <Resultado r={resultado} />
      <TabelaIMC />
    </main>
  );
}
