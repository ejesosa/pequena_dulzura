import logo from './logo_pequena_dulzura.png';
import './App.css';
import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

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
        

      </div>
    </div>
  );
}

export default App;
