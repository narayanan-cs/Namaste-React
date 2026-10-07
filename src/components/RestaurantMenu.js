import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Shimmer from './Shimmer.js';
import useRestaurantMenu from '../utils/useRestaurantMenu.js';
import RestaurantCategory from './RestaurantCategory.js';

const Menu = () => {
    const {resId} = useParams();
    console.log("ResId",resId);

    const [activeIndex, setActiveIndex] = useState(null);
    
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) {
        return <Shimmer />;
    } 
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    //const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.card.card;
    console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    const itemCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(
    itemCategories.map(item => item?.card?.card)
);
        return (
        <div className="text-center">
            <h1 className="my-10 text-2xl font-bold">{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            {itemCategories.map((category, index) => (
                <RestaurantCategory key = {category?.card?.card?.id} data={category?.card?.card } isActive = {activeIndex === index} onShow= {()=>activeIndex === index?setActiveIndex(null):setActiveIndex(index)}/>
            ))}
        </div>
    )
}

export default Menu;