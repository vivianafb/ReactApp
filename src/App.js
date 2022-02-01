import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola, soy ItemListContainer!"></ItemListContainer>
    </div>
  );
}

export default App;
