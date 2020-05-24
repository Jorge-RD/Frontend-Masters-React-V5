import React from "react";
import { render } from "react-dom";

import Pet from "./components/Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <Pet name={"Luna"} animal={"Dog"} breed={"Havanese"} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
