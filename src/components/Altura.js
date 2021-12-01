import React from "react";

export default function Altura(props) {
  return (
    <>
      <section>
        <label>
          Altura: <br />
          <input
            type="text"
            value={props.a}
            onChange={(e) => {
              props.sa(e.target.value);
            }}
          />
        </label>
      </section>
    </>
  );
}
