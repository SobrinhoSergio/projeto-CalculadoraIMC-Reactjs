import React from "react";

export default function CalcularIMC(props) {
  const calc = () => {
    const r = props.p / props.a ** 2;
    props.sr(r);
  };

  return (
    <>
      <button onClick={calc}>Calcular</button>
    </>
  );
}
