import logo from '../src/img/logo_pequena_dulzura.png';
import './App.css';
import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/CartWidget.css';
import './components/NavBar.css';
import ItemListContainer from './components/ItemListContainer.jsx';
import './components/ItemListContainer.css';
import './components/NavBar.css';
import './components/Button.css';
import './components/ItemCount.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>

      <div className="body">

      <h2 className="title">
        Bienvenidx a Pequeña Dulzura
      </h2>

      <img src={logo} className="App-logo" alt="logo" />

      <ItemListContainer greeting="Saludos"/>

      
      </div>
    </div>
  );
}

export default App;
