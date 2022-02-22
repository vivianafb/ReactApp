import "./App.css";
import Rutas from "./routes";
import ItemCount from "../src/components/NavBar/ItemCount"

function App() {
  return (
    <div className="App">
      <Rutas />
      <ItemCount stock="5"/>
    </div>
  );
}

export default App;
