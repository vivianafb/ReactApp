import "./App.css";
import CartProvider from "./context/CartProvider";
import Rutas from "./routes";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Rutas />
      </CartProvider>
    </div>
  );
}

export default App;
