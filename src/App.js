import { useState } from "react";
import Left1 from "./components/Left1";
import Right1 from "./components/Right1";

function App() {
  const [number, setNumber] = useState(2);
  return (
    <div className="App">
      <h1>Root App: {number}</h1>
      <div className="wrapper">
        <Left1 num={number} />

        <Right1 num={number} onIncrease={() => setNumber(number + 1)} />
      </div>
    </div>
  );
}

export default App;
