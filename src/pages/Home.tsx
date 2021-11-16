import logo from '../assets/images/logo.svg';
import primeiroRestaurante from '../assets/images/first-restaurant.svg';
import segundoRestaurante from '../assets/images/second-restaurant.svg';


import '../styles/home.css';

import { Link } from 'react-router-dom';



export function Home() {
    
    return (
        <div>
            
            <header className="header-container">
                <div className="header-container-main">
                    <div id="logo">
                        <img src={logo} />
                    </div>
                    <div className="header-container-text">
                        <h2>Descubra novos sabores</h2>
                        <p>Aqui eu converso com você sobre nossa proposta</p>
                    </div>
                </div>
                <div className="header-container-search">
                    <input type="text" placeholder="Encontre um restaurante" />
                </div>
            </header>
            <section className="main-container">
                    <h2>Restaurantes</h2>
                <div className="main-container-restaurantes">

                    <div className="item">
                        <Link to="/restaurant">
                            <img src={primeiroRestaurante}></img>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/restaurant">
                            <img src={segundoRestaurante}></img>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/restaurant">
                            <img src={primeiroRestaurante}></img>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/restaurant">
                            <img src={segundoRestaurante}></img>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/restaurant">
                            <img src={primeiroRestaurante}></img>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="/restaurant">
                            <img src={segundoRestaurante}></img>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/restaurant">
                            <img src={primeiroRestaurante}></img>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="/restaurant">
                            <img src={segundoRestaurante}></img>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="/restaurant">
                            <img src={primeiroRestaurante}></img>
                        </Link>
                        </div>
                    <div className="item">
                        <Link to="/restaurant">
                            <img src={segundoRestaurante}></img>
                        </Link>
                    </div>
                </div>
            </section>
        </div>            
    )
}