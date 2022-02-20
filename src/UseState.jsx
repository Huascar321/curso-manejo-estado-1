import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(true); //Forma imperativa
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");
    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");
        setLoading(false);
        console.log("Terminamos la validación");
      }, 3000);
    }
    console.log("Terminando el efecto");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>
        Por favor, escribe el código de seguridad para comprobar que quieres
        eliminar.
      </p>

      {error && <p style={{ color: "red" }}>Error: el código es incorrecto</p>}
      {loading && <p style={{ color: "green" }}>Cargando...</p>}
      <input placeholder="Código de seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };