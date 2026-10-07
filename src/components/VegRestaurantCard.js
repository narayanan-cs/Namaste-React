export const VegRestaurantCard = (RestaurantCard) => {
        //const {id, name, costForTwo, cloudinaryImageId, avgRatingString, cuisines,sla, veg} = props.resData.info;
   // console.log(id,name, cloudinaryImageId, avgRatingString, cuisines.join(","),sla.slaString);
    return (props)=>{
       return (
        <div className="relative">
          <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Vegetarian</label>
          <RestaurantCard { ...props} />
        </div>
       )          
    }
}