import axios from "axios";
import React from "react";
import {useEffect, useState} from "react"
import { useParams } from "react-router";
import IRestaurants from "./ListRestaurants";
import iconVoltar from '../assets/images/icon-voltar.svg';

import '../styles/restaurants.css'
import { number_format } from "../Utils/Utils";
import { Link } from "react-router-dom";

export function Restaurant() {
    
    const [Restaurants, setRestaurants] = useState<IRestaurants[]>([]);

    const parms = useParams();
    
    let url = 'https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants/' + parms.id;

    useEffect(() => {
        
        axios.get<IRestaurants>(url)
            .then(response => {
                const restaurant = new Array(response.data.data);
                setRestaurants(restaurant);
            })
    }, []);
    
    return (
        <div className="restaurant-information">
            {Restaurants.map((restaurant) => (
                <div>
                    <header className="restaurant-header-container">
                        <img className="restaurant-header-container-image" src={restaurant.image}></img>
                        <div className="icon-voltar">
                            <Link to="/">
                                <img src={iconVoltar}></img>
                            </Link>
                            <Link to="/">
                                <div className="textVoltar">Voltar</div>
                            </Link>
                        </div>
                        <div className="restaurant-header-container-div-logo">
                            <img className="restaurant-header-container-logo" src={restaurant.logo}></img>
                            <div>
                            <p className="restaurant-name">{restaurant.name}</p>
                            <p className="other-information">{number_format(restaurant.telephone)}</p>
                            <p className="other-information">{restaurant.website}</p>
                            </div>
                        </div>
                    </header>
                    <div className="restaurant-main-information">
                        <div>
                            <h6>Descrição</h6>
                            <p className="information" id="description">{restaurant.description}</p>
                        </div>
                        <div>
                            <h6>Faixa de preço</h6>
                            <p className="information">{restaurant.price_range}</p>
                        </div>
                        <div id="hr">
                            <hr></hr>
                        </div>
                        <div>
                            <h6>Horários de Funcionamento</h6>
                            <p className="information">{restaurant.opening_hours}</p>
                        </div>
                        <div>
                            <h6>Formas de pagamento</h6>
                            <p className="information">{restaurant.payment_methods}</p>
                        </div>
                    </div>
                </div>

              ))}
        </div>
      );
}