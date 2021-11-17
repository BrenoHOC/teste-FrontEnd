import axios from "axios";
import {useEffect, useState} from "react"

import '../styles/listRestaurants.css';

export default interface IRestaurants {
    id: number;
    name: string;
    description: string;
    image: string;
    logo: string;
    opening_hours: string;
    payment_methods: string;
    price_range: string;
    telephone: number;
    website: string;
    data: any;
}

export function ListRestaurants() {
    
    const [ListRestaurants, setListRestaurants] = useState<IRestaurants[]>([]);

    useEffect(() => {
        
        axios.get('https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=1&limit=10')
            .then(response => {
                setListRestaurants(response.data.data);
            })
    }, []);

    return (
        <div>
          <section className="listRestaurant">
              {ListRestaurants.map(ListRestaurant => {
                  return (
                    <div>
                        <a href={`/restaurant/${ListRestaurant.id}`}>
                            <img src={ListRestaurant.logo}></img>
                        </a>
                    </div>
                    )
                })}
          </section>
        </div>
      )
}