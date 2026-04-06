import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {RESTAURANT_MENU_API} from '../utils/constants.js';
import Shimmer from './Shimmer.js';


const Menu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log("ResId",resId);
    useEffect(()=>{
     async function getRestaurantMenu() {
            try {
            const response= await fetch(`${RESTAURANT_MENU_API}/${resId}`);
                const data = await response.json();
                console.log(data.data.cards[2].card.card.info)
                setResInfo(data.data.cards[2].card.card.info);
                
            } catch(error) {
                console.log("Error fetching menu", error);
            }
        }

    getRestaurantMenu();

    },[resId]);

    return resInfo === null?<Shimmer />: (
        <div className="res-card">
            <h1>{resInfo.name}</h1>
            <div className = "menu-img-container">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ resInfo.cloudinaryImageId} alt="pic" />
            </div>
            
            
            <div>cost: {resInfo.costForTwo}</div>
            <div>cusisines:{resInfo.cuisines.join(",")}</div>

        </div>
    )
}

export default Menu;