import '../styles/estilos.css';
import { Link } from 'react-router-dom'; //componente que redirige a otras paginas
import arrozleche from '../imagenes/arroz_con_leche.jpg'; // se importan imagenes para poder usarlas
import hamburguesa from '../imagenes/Hamburguesa.jpg';
import logo from '../imagenes/Logolozdelicias.png';
import parrillada from '../imagenes/Parrillada.jpg';
import pancakes from '../imagenes/pancakes.jpg';
import panmolde from '../imagenes/Panmolde.jpg';
import sandwich from '../imagenes/sandwcih.jpg';
// import NavBar from '../components/NavBar';
import Cookies from 'universal-cookie';
import { Component } from 'react';

const cookies = new Cookies();

class Recetario extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('apellido', {path: "/"});
        cookies.remove('email', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href="./";
    }

    componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render(){
        console.log('id: '+ cookies.get('id'));
        console.log('nombre: '+ cookies.get('nombre'));
        console.log('apellido: '+ cookies.get('apellido'));
        console.log('email: '+ cookies.get('email'));
        console.log('username: '+ cookies.get('username'));

        return(
            <body>
        {/* <div>
            <div className="mt-5 p-5 text-start" />
            <NavBar />             
        </div> */}
<div>
<header className="hero">
            <nav class="nav container">
                <div class="nav_logo">
                    <img src={logo} alt='logo' style={{
                        width: '200px',
                        height: '100px',
                    }}/>
                </div>

                {/* BARRA DE BUSQUEDA        */}

                <div class="barra-busqueda" 
                style ={{
                    textAlign: '-moz-center',                    
                    background: 'none',
                }}
                >
                    <div class="col-md-12">
                        <div id="sb-search" class="sb-search">
                            <form>
                                <input id="searchbar" class="sb-search-input" placeholder="Barra de búsqueda" type="text" name="search" />
                                <input class="sb-search-submit" type="submit" />                                
                            </form>
                         </div>              
                    </div>
                </div>

                <ul class="nav_link nav_link--menu">
                    <li class="nav_items">
                        <Link to="/" class="nav_links">Inicio</Link>
                    </li>
                    <li class="nav_items">
                        <Link to="/recetario" class="nav_links">Recetario</Link>
                    </li>
                    <li class="nav_items">
                        <Link to="/" class="nav_links">Usuario</Link>
                    </li>                    
                    <li class="title pointercursor">
                        {/* <Link to="/" class="nav_links">Cerrar sesión</Link>                        */}
                        <button type='button' onClick={()=>this.cerrarSesion()}>Cerrar sesión</button>
                    </li>
                    

                    {/* <img src="Imagenes/close.svg" class="nav_close" /> */}
                </ul>

                {/* <div class="nav_menu">
                    <img src="Imagenes/menu.svg" class="nav_img" />
                </div> */}
            </nav> 
        </header>

        {/* Resumen recetas */}
            
        <main>
            <section class="container recetas">
                <div class="recetas">                
                <article class="recetas_fotos">
                    <img src={arrozleche} alt='arroz' class="recetas_foto" />
                    <h3 id="recetaname"  class="recetas_title">Arroz con leche</h3> 
                    <Link to="/arrozconleche">
                    <button class="boton_receta" type="submit" name="ver más">Ver más</button></Link>
                </article>                
                <article class="recetas_fotos">
                    <img src={hamburguesa} alt='hamburguesa' class="recetas_foto"/>
                    <h3 id="recetaname" class="recetas_title">Hamburguesa</h3> 
                    <button class="boton_receta" type="submit" name="ver más">Ver más</button>
                </article>
                <article class="recetas_fotos">
                    <img src={parrillada} alt='parrillada' class="recetas_foto"/>
                    <h3 id="recetaname" class="recetas_title">Parrillada</h3> 
                    <button class="boton_receta" type="submit" name="ver más">Ver más</button>
                </article>
                <article class="recetas_fotos">
                    <img src={pancakes} alt='pancakes' class="recetas_foto"/>
                    <h3 id="recetaname"  class="recetas_title">Pancakes</h3> 
                    <button class="boton_receta" type="submit" name="ver más">Ver más</button>
                </article>
                <article class="recetas_fotos">
                    <img src={panmolde} alt='panm' class="recetas_foto"/>
                    <h3 id="recetaname" class="recetas_title">Pan de molde</h3> 
                    <button class="boton_receta" type="submit" name="ver más">Ver más</button>
                </article>
                <article class="recetas_fotos">
                    <img src={sandwich} alt='sandwich' class="recetas_foto"/>
                    <h3 id="recetaname" class="recetas_title">Sándwich</h3> 
                    <button class="boton_receta" type="submit" name="ver más">Ver más</button>
                </article>
                </div>
            </section>
        </main>  
        </div>       
        
</body>


        )
    }
}

export default Recetario;