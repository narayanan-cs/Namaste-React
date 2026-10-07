import { useState, useEffect } from "react";
import {RESTAURANT_MENU_API} from './constants.js';
console.log("RESTAURANT_MENU_API", RESTAURANT_MENU_API);
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        console.log("useRestaurantMenu called");
     async function getRestaurantMenu() {
            try {
            const response= await fetch(`${RESTAURANT_MENU_API}/${resId}`);
                const data = await response.json();
                console.log("Menu Data", data.data);
                console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
                setResInfo(data.data);
                
            } catch(error) {
                console.log("Error fetching menu", error);
            }
        }

    getRestaurantMenu();

    },[resId]);

    return resInfo;
}

export default useRestaurantMenu;