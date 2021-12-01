import React from "react";

export default function Peso(props) {
  return (
    <>
      <section>
        <label>
          Peso: <br />
          <input
            type="text"
            value={props.p}
            onChange={(e) => {
              props.sp(e.target.value);
            }}
          />
        </label>
      </section>
    </>
  );
}
