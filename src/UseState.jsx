import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false); //Forma imperativa
  const [loading, setLoading] = React.useState(false);

  console.log(value);

  React.useEffect(() => {
    console.log("Empezando el efecto");
    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");
        if (value !== SECURITY_CODE) {
          setError(true);
        }
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

      {/* {(error && !loading) && <p style={{ color: "red" }}>Error: el código es incorrecto</p>} */}
      {error && <p style={{ color: "red" }}>Error: el código es incorrecto</p>}
      {loading && <p style={{ color: "green" }}>Cargando...</p>}

      <input
        placeholder="Código de seguridad"
        value={value}
        onChange={(event) => {
          /* setError(false); */
          setValue(event.target.value);
        }}
      />
      <button onClick={() => {
        setLoading(true);
        setError(false); //Este fue correcto
      }}>Comprobar</button>
    </div>
  );
}

export { UseState };
