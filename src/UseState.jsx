import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  console.log(state);

  React.useEffect(() => {
    console.log("Empezando el efecto");
    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }
        console.log("Terminamos la validación");
      }, 3000);
    }
    console.log("Terminando el efecto");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>
          Por favor, escribe el código de seguridad para comprobar que quieres
          eliminar.
        </p>

        {state.error && !state.loading && (
          <p style={{ color: "red" }}>Error: el código es incorrecto</p>
        )}
        {state.loading && <p style={{ color: "green" }}>Cargando...</p>}

        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {
            setState({
              ...state,
              value: event.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            setState({
              ...state,
              loading: true,
            });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmación. ¿tas segurx?</p>
        <button
          onClick={() =>
            setState({
              ...state,
              deleted: true,
            })
          }
        >
          Sí, eliminar
        </button>
        <button
          onClick={() =>
            setState({
              ...state,
              confirmed: false,
              value: '',
            })
          }
        >
          Nop, me arrepentí
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito</p>

        <button
          onClick={() =>
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: '',
            })
          }
        >
          Resetear, volver atrás
        </button>
      </>
    );
  }
}

export { UseState };
