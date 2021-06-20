import React, { Component } from 'react';
import firebase from '../firebase';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
    }

    login(){
        let provider=new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result =>{
                console.log(result);
            })
    } 

    render(){
        return (
            <a type="button" onClick={this.login}>Profile</a>
        );
    }
}



/*this.setState({abierto: false})  
  state={

        abierto:true,
        <Modal isOpen={this.state.abierto} className="overlay">
                <div className="popup2" id="popup2">
                <h2>Inicio de Sesion</h2>
                <div id="popoBack">
                    <p>Correo Electronico:<input id= "Vtitulo" type="text"/></p>
                    <p>Password: <br/> <input id= "Vtitulo" type="text"/></p>
                    <button className="btn" onClick={this.login}>Sing-In</button>
                    <button className="btnSingGoogle">Sing with Google</button>
                </div>
                </div>
            </Modal>
    }*/