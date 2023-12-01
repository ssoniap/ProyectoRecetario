import '../styles/estilos.css';
import { Link } from 'react-router-dom';
import logo from '../imagenes/Logolozdelicias.png';
import arrozleche from '../imagenes/arroz_con_leche.jpg';
import flames from '../imagenes/flame.svg';

function DetalleArroz(){
    return(
        <body>
        <header class="hero">
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
                    textAlign: 'center',
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
                        <Link to="/" class="nav_links">Menu</Link>                        
                    </li>
                    

                    {/* <img src="Imagenes/close.svg" class="nav_close" /> */}
                </ul>

                {/* <div class="nav_menu">
                    <img src="Imagenes/menu.svg" class="nav_img" />
                </div> */}
            </nav> 
        </header>  
        
        <main>
            <section class="container detalle">
                <div class="detalle">
                <article class="detalle_recetas">
                    <img src={arrozleche} alt='arroz' class="detalle_foto" style={{height: '200px', width: '200px', marginTop: '20px'}} />
                    <h2 class="detalle_title">Arroz con leche</h2>
                    <h3 class="detalle_subtitle">Postre</h3>
                    <ul>
                        <li class="receta_items"><span class="icon icon-users"></span><span>1</span></li>
                        <li class="receta_items"><span class="icon icon-clock"></span><span>45 min</span></li>
                        <li class="receta_items"><span class="icon icon-level"></span><span>Dificultad</span></li>
                        <li class="receta_items"><span class="icon icon-calories"></span><span>560</span></li>
                    </ul>
                    <p class="reseña">El arroz con leche es un postre muy delicioso y tradicional colombiano colombiano colombiano colombiano....xxxxxxxx</p>
                    <p class="ingredientes_n"><span>Ingredientes:</span>
                        <li class="ingredientes"><img src={flames} alt='flame' style={{height: '20px', width: '20px'}}/>Arroz</li> 
                        <li class="ingredientes"><img src={flames} alt='flame' style={{height: '20px', width: '20px'}}/>Agua</li>
                        <li class="ingredientes"><img src={flames} alt='flame' style={{height: '20px', width: '20px'}}/>Leche</li>
                        <li class="ingredientes"><img src={flames} alt='flame' style={{height: '20px', width: '20px'}}/>Canela</li>
                        <li class="ingredientes"><img src={flames} alt='flame' style={{height: '20px', width: '20px'}}/>Crema de leche</li>
                        <li class="ingredientes"><img src={flames} alt='flame' style={{height: '20px', width: '20px'}}/>Azucar</li>
                        <li class="ingredientes"><img src={flames} alt='flame' style={{height: '20px', width: '20px'}}/>Mantequilla</li>
                        <li class="ingredientes"><img src={flames} alt='flame' style={{height: '20px', width: '20px'}}/>Leche condensada</li>
                    </p>
                </article>
                </div>
            </section>
        </main>
        
    </body>    

    )}

    export default DetalleArroz;