import React from 'react';
import Etiqueta from './Etiqueta.js';
import Like from 'C:/Users/HP/Desktop/prueba/src/assets/imagenes/like.png';
import Dislike from 'C:/Users/HP/Desktop/prueba/src/assets/imagenes/dislike.png';
import Compartir from 'C:/Users/HP/Desktop/prueba/src/assets/imagenes/share.png';

class Apunte extends React.Component{
    render(){
        let user={
            name:'juan',
            lo:'asd'
        }
        return (
            <div id="Contenido-Contener">
                <button id="btnFecha">15/6/21</button>
                <div id="Contenido-Tarea">
                    <h4 id="Titulo">Titulo-ejemplo</h4>
                    <p id="Descripcion">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor, nunc at varius gravida, libero dui commodo neque, id iaculis velit sem eu elit. In quis ornare felis, eget egestas tortor. Sed ac sagittis lorem. Aliquam commodo mollis enim, sit amet dignissim tellus cursus ut. Cras hendrerit velit purus, quis placerat velit interdum ut. Quisque tempus, mauris a tempor malesuada, dolor nibh porttitor ipsum, id ullamcorper ex leo sit amet felis. Sed molestie convallis turpis quis semper. Praesent ultricies, magna sit amet finibus laoreet, enim nibh tristique leo, vel congue justo augue eget ex. Morbi lobortis ipsum in fringilla porta. Vivamus nibh eros, ultrices non tortor nec, ultrices posuere dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum semper vestibulum odio ac auctor. Duis eleifend nisl lorem, in volutpat purus hendrerit nec. Praesent luctus purus ornare sodales eleifend. Quisque auctor, nisl ac imperdiet efficitur, nibh lacus faucibus erat, non vulputate risus lorem nec enim. Nulla luctus veli
                    </p>
                    <div id="Etiquetas">
                        <Etiqueta/>
                        <Etiqueta/>
                        <Etiqueta/>
                    </div>
                    <div id="Tarea-Interacciones">
                        <p id="btnLikes" class="btnInterracion">
                            <img src={Like} class="tamano" alt=""/>
                        </p>
                        <p id="btnLikes" class="btnInterracion">
                            <img src={Dislike} class="tamano" alt=""/>
                        </p>
                        <p id="btnLikes" class="btnInterracion">
                            <img src={Compartir} class="tamano" alt=""/>
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Apunte;