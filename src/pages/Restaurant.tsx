
import logoRestaurante from '../assets/images/logo-restaurant.svg';
import voltar from '../assets/images/icon-voltar.svg';
import { Link } from 'react-router-dom';

import '../styles/restaurant.css';

export function Restaurant() {
    
    return (
        <div>
            <header className="restaurant-header-container">
                <div className="restaurant-header-container-main">
                    <div className="teste">
                        <Link to="/">
                          <img src={voltar}></img>
                        <h6>Voltar</h6>
                        </Link>
                        <div className="center-information">
                          <img src={logoRestaurante}></img>
                          <div className="center-information-restaurant">
                            <h2>Mamma Mia</h2>
                            <h5>(11) 3210-9876</h5>
                            <h5>http://www.mammamia.com.br</h5>
                          </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="restaurant-information">
              <h6>Descrição</h6>
              <p className="description">O Mamma Mia é um restaurante especializado em culinária italiana e vinhos.</p>
              <h6>Faixa de preço</h6>
              <p className="description">De R$40 a R$70</p>
              <hr></hr>
              <h6>Horários de Funcionamento</h6>
              <p className="description">De terça à domingo das 17:00 às 23:00</p>
              <h6>Formas de pagamento</h6>
              <p className="description">Dinheiro, cartão de crédito e débito.</p>
            </section>
        </div>            
    )
}