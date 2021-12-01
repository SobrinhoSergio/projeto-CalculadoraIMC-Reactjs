import React from "react";

export default function ResultadoIMC(props) {
  return (
    <>
      <article>
        <p>Resultado: {props.r.toFixed(2)}</p>
      </article>
    </>
  );
}
