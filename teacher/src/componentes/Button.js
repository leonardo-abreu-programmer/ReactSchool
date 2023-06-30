import React from "react";

export default function Button()
{
  return(
    <div>
      <button onClick={
        () => {
          alert("Clicou no botão");
        }
      }>
        Click me
      </button>
    </div>
  );
}
