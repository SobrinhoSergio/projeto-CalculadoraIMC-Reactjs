import React from "react";

export default function TabelaIMC() {
  return (
    <footer>
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Classificação</th>
            <th>IMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo do Peso</td>
            <td>Abaixo de 18,5</td>
          </tr>
          <tr>
            <td>Peso normal</td>
            <td>Entre 18,5 e 24,9</td>
          </tr>
          <tr>
            <td>Sobrepeso</td>
            <td>Entre 25 e 29,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau 1</td>
            <td>Entre 30 e 34,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau 2</td>
            <td>Entre 35 e 39,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau 3 ou Mórbida</td>
            <td>Maior que 40</td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
}
