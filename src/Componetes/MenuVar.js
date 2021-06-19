import React from 'react';

class MenuVar extends React.Component{
    render(){
        return (
            <div class ="wrapper">
                <p id="NameEmpresa">Menexx</p>
                <nav>
                    <a href="#"  type="button">Search</a>
                    <a href="#"  type="button">Friends</a>
                    <a href="#"  type="button">Perfil</a>
                </nav>
            </div>
        );
    }
}

export default MenuVar;