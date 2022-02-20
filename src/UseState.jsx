import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(true); //Forma imperativa

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>

      {error && (
        <p style={{color: "red"}}>Error: el código es incorrecto</p>
      )}
      <input placeholder="Código de seguridad"/>
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
}

export { UseState };