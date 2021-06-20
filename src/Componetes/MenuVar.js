import React from 'react';
import Login from './Login.js';

class MenuVar extends React.Component{
    render(){
        return (
            <div class ="wrapper">
                <p id="NameEmpresa">Menexx</p>
                <nav>
                    <a href="#"  type="button">Search</a>
                    <a href="#"  type="button">Friends</a>
                    <Login/>
                </nav>
            </div>
        );
    }
}

export default MenuVar;