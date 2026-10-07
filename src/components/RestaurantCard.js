import {useContext} from "react";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = (props) => {
    const { loggedInUser } = useContext(UserContext);   
   //console.log("props", props.resData);
    const {id, name, costForTwo, cloudinaryImageId, avgRatingString, cuisines,sla} = props.resData.info;
   // console.log(id,name, cloudinaryImageId, avgRatingString, cuisines.join(","),sla.slaString);
    return (
        
        <div data-testid="resCard" className="res-card border border-solid border-black rounded-2xl hover:bg-gray-900 hover:shadow-lg">
            
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ cloudinaryImageId} alt = "image" className="rounded-2xl"/>
            <div className="card-content">
   
     <h3 className="font-bold text-lg py-4">{name}</h3>
        <h3>{costForTwo}</h3>
            <h3>{"Rating -" + avgRatingString}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{"ETA-"+ sla.slaString}</h3>
            <h3 className="font-bold">Welcome, {loggedInUser}!</h3>
            </div>
            
        </div>
        
)
}




export default RestaurantCard;