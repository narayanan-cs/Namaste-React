import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard.js";
import {RESTAURANT_LIST_API} from '../utils/constants.js';
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Shimmer from "./Shimmer.js";
const Body = () => {
    
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(()=>{
    async function getRestaurants() {
        try {
            const response = await fetch(RESTAURANT_LIST_API);
            const data = await response.json();
            const resList =  data?.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurants(resList)
            setFilteredRestaurants(resList)
           // console.log("Restaurants", restaurants);
        }catch (error) {
            console.log("Error fetching list of restaurants", error);
        }
    }
 
    getRestaurants();
    },[]);
    
   const onlineStatus = useOnlineStatus();

   if(onlineStatus===false)
    {
    return <h1>Looks like you are offline. Please check your internet connection.</h1>
    }
    return restaurants.length===0?<Shimmer />:(
        <div className="body">
            <div className="input-container">
        <input type="text" placeholder = "enter a name" name="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button className="search" onClick={()=>
            {const res = restaurants.filter(
            restaurant=> {
               return  restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                })
            setFilteredRestaurants(res)}
                }>Search</button>
            <button className="search-btn" onClick = {(e)=> {const resList = filteredRestaurants.filter(restaurant=>restaurant.info.avgRatingString>4.5); setFilteredRestaurants(resList)}}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map(restaurant=> <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData = {restaurant} /></Link>)
                
}
            </div>
        </div>
    )
}

export default Body;