import '../styles/login.css';
import logo from '../imagenes/chefluzdelicias.png';
import { Component } from 'react';
import React from "react";
import axios from 'axios';

import Cookies from 'universal-cookie';

//API creada con json como ejemplo
const baseUrl="http://localhost:3001/users";
const cookies= new Cookies();

class LogIn extends Component{
    state={
        form:{
            username: '',
            password: '',
        }
    }
    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        // console.log(this.state.form);
    }
    //metodo para hacer peticion http e iniciar sesion

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: this.state.form.password}}) //cifrar el input a md5
        .then(response=>{
            // console.log(response.data); //si es exitosa que se muestre en consola
            return response.data; //retorna
        })
        .then(response=>{ //se utiliza
            if(response.length>0){
                var respuesta = response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('apellido', respuesta.apellido, {path: "/"});
                cookies.set('email', respuesta.email, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert('Bienvenido');
                window.location.href="./recetario";
            } else {
                alert('Usuario o contraseña incorrecta')
            }
        })
        .catch(error=>{
            console.log(error); //si es erronea que se muestre en consola 
        })
    }

    componentDidMount(){
        if(cookies.get('username')){
            window.location.href="./recetario";
        }
    }

    render() {
        return (
                
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    {/* Imagen de la empresa */}
                    <div className= "logochef" ><img src={logo} alt='logo'/>                                                                
                    </div>
                    <div className="titulo">
                        Bienvenido, por favor inicia sesión
                    </div>
                    {/* Formulario de ingreso */}
                    <form id="loginform">
                        <input 
                        id="username" 
                        type="text" 
                        name="username" 
                        autoComplete='off'
                        onChange={this.handleChange}
                        placeholder="Usuario"
                        ></input>
                        
                        <input 
                        id="password" 
                        type="password" 
                        placeholder="Contraseña" 
                        name="password" 
                        autoComplete='off'
                        onChange={this.handleChange}
                        ></input>
                        
                        <button type="button" title="Ingresar" name="Ingresar" onClick={()=> this.iniciarSesion()}>Iniciar</button>
                    </form>                    
                </div>               
            </div>
        </div>
        
    

        )
    }
}





export default LogIn;
