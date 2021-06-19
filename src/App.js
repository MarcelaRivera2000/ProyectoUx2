import './assets/css/App.css';
import Apunte from './Componetes/Apunte.js';
import MenuVar from './Componetes/MenuVar.js';
import AgregarApunte from './Componetes/AgregarApunte.js';

function App() {
  return (
    <div className="App">
      <header>
         <MenuVar/>
         <MenuVar/>
      </header>
      <div className="Koana wrapper">
        <button id="btnAgregar">Agregar Apunte</button>
        <div id="Koana-Contenido-total">
          <Apunte/>
        </div>
      </div>

      <AgregarApunte/>  
    </div>
  );
}

export default App;

