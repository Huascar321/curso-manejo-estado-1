import React from "react";

class Loading extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return <p style={{color: "green"}}>Cargando...</p>
  }
}

export { Loading };
