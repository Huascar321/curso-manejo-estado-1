import React from "react";
import { UseState } from "./UseState.jsx";
import { UseReducer } from "./UseReducer";
/* import { ClassState } from "./ClassState.jsx"; */
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="Use State"/>
      <UseReducer name="Use Reducer"/>
      {/* <ClassState name="ClassState"/> */}
    </div>
  );
}

export default App;
