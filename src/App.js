import React,{Component} from 'react';
import './assets/css/App.css';
import Apunte from './Componetes/Apunte.js';
import MenuVar from './Componetes/MenuVar.js';
import {Modal} from 'reactstrap';

class App extends Component {
  render(){
    return(
      <div className="App">
        <header>
          <MenuVar/>
        </header>
        <div className="Koana wrapper">
          <button id="btnAgregar" onClick={this.AbrirVentana}>Agregar Apunte</button>
          <div id="Koana-Contenido-total">
            <Apunte/>
            <Apunte/>
            <Apunte/>
          </div>
        </div>
        <Modal isOpen={this.state.abierto} className="overlay" id="overlay">
            <div className="popup" id="popup">
            <a class="btn-cerrar-popup" id="btn-cerrar-popup" onClick={this.AbrirVentana}>x</a>
            <h3 className ="wrapper">NUEVA APUNTE</h3>
                <form action="" className="wrapper">
                    <div className="contenedor">
                        <p>Titulo: <input id= "Vtitulo" type="text"/></p>
                        <textarea id="Vtext-area"></textarea>
                    </div>
                        <p>Etiquetas: <input id= "Vetiquetas" type="text"/></p>
                        <button id="btnGuardar" className="btnGuardar">Guardar</button>
                </form>
             </div>
        </Modal>


        
      </div>
     
    )
  }

  state={
    abierto:false,
  }

  AbrirVentana=()=>{
   this.setState({abierto: !this.state.abierto})
  } 
  
}

export default App;

