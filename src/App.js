import "./App.css";
import Comp1 from "./Comps/Comp1";
import Comp2 from "./Comps/Comp2";

function App() {
  return (
    <div>
      <p>Классовый (ООП) подход</p>
      <Comp1 />
      <hr />
      <p>Функциональный подход</p>
      <Comp2 />
    </div>
  );
}

export default App;
