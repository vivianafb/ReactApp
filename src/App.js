import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemCount from './components/NavBar/ItemCount';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer/>
    </div>
  );
}

export default App;
