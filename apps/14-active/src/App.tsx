import React from "react";
import Title from "./components/Atoms/Title";
import Heading from "./components/Atoms/Heading";

function App() {
  return (
    <div>
      <Title>Hi</Title>
      <Title size="large">Hi</Title>
      <hr />
      <Heading type="h1" weight="bold">
        Heading 1
      </Heading>
    </div>
  );
}

export default App;
