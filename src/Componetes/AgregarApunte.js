import React from 'react';

class AgregarApunte extends React.Component{
    render(){
        return (
            <div className="overlay" id="overlay">
                <div className="popup" id="popup">
                    <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup"><p className="fas fa-times">x</p></a>
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
            </div>
        );
    }
}

export default AgregarApunte;





