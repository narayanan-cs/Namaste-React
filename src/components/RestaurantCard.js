const RestaurantCard = (props) => {
   //console.log("props", props.resData);
    const {id, name, costForTwo, cloudinaryImageId, avgRatingString, cuisines,sla} = props.resData.info;
   // console.log(id,name, cloudinaryImageId, avgRatingString, cuisines.join(","),sla.slaString);
    return (
        
        <div className="res-card">
            
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ cloudinaryImageId} alt = "image" />
            <div className="card-content">
        <h3>{name}</h3>
        <h3>{costForTwo}</h3>
            <h3>{"Rating -" + avgRatingString}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{"ETA-"+ sla.slaString}</h3>
            </div>
            
        </div>
        
)
}

export default RestaurantCard;