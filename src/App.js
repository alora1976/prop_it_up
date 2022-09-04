import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Smith"}
        firstName={"John"}
        age={25}
        hair={"Red"}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"Anna"}
        age={45}
        hair={"Blue"}
      />
      <PersonCard lastName={"Lopez"} firstName={"Jen"} age={25} hair={"purple"} />
      <PersonCard
        lastName={"JOhnson"}
        firstName={"Matt"}
        age={50}
        hair={"green"}
      />
    </div>
  );
}

export default App;