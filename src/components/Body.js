import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard.js";
import {VegRestaurantCard} from "./VegRestaurantCard.js";
import {RESTAURANT_LIST_API} from '../utils/constants.js';
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Shimmer from "./Shimmer.js";
import UserContext from "../utils/UserContext.js";


const Body = () => {
    
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const VegCard = VegRestaurantCard(RestaurantCard);
    useEffect(()=>{
        console.log("useEffect called");
        async function getRestaurants() {
        try {
            const response = await fetch(RESTAURANT_LIST_API);
            const data = await response.json();
            console.log("Data", data);
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
        
         <div className="p-2">
         <div className="flex justify-center items-center">
         
         <input  data-testid="searchInput" className="border border-solid border-black  rounded-2xl w-36 h-10 mx-3" type="text" placeholder = "enter a name" name="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
         
         
        <button className="search px-8 py-4 bg-green-50 mx-3 rounded-2xl " onClick={()=>
            {const res = restaurants.filter(
            restaurant=> {
               return  restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                })
            setFilteredRestaurants(res)}
                }>Search</button>
            <button className="search-btn px-8 m-4 border border-black border-solid bg-gray-50 rounded-2xl" onClick = {(e)=> {const resList = filteredRestaurants.filter(restaurant=>restaurant.info.avgRatingString>4.5); setFilteredRestaurants(resList)}}>Top Rated Restaurants</button>
                            <div className="border border-solid border-black rounded-2xl w-36 h-10 mx-3 flex justify-center items-center">
                    <UserContext.Consumer>
                        {({ loggedInUser, setUserName }) => 
                           ( <div data-testid="userName">
                            <span className="font-bold">Welcome, {loggedInUser}!</span>
                            <input type="text" placeholder = "enter a name" name="search" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                            </div>
                           )
                        }     
                    </UserContext.Consumer>
                </div>

            
            </div>
            <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    filteredRestaurants.map(restaurant=> 
                    <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                        {restaurant.info.veg?<VegCard resData = {restaurant} />:
                        <RestaurantCard resData = {restaurant} />
                        }
                    </Link>
                    )
                
}
            </div>
            
        </div>
    )
}

export default Body;