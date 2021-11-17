import { ListRestaurants } from './ListRestaurants';

import logo from '../assets/images/logo.svg';
import '../styles/home.css';

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
                    <ListRestaurants />
            </section>
        </div>            
    )
}