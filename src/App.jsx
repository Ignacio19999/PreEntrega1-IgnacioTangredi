import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import './App.css';

function App (){
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer Bienvenido="Bienvenidos a la libroteca" />
    </div>
  );
}

export default App;
