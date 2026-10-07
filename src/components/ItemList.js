import {CDN_URL} from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../utils/cartSlice.js";

const ItemList= ({items})=>{

const dispatch = useDispatch();

return (<div className="p-2 m-2">
{items.map((item) => (
    <div data-testid="food-items" key={item?.card?.info?.id} className="p-2 m-2 bg-gray-100 border-black shadow-lg text-left">
        <img src={CDN_URL + item?.card?.info?.imageId} alt = "image" className="rounded-lg"/>
        <div className="py-2">
        <span>{item?.card?.info?.name}</span>
        <span> - ₹ {item?.card?.info?.price/100}</span>
        </div>
        <div className="flex justify-between items-center">
        <p className="text-gray-600 text-left">{item?.card?.info?.description}</p>
        <button className="bg-green-400 text-white m-4 p-2 rounded-lg cursor-pointer" onClick={() => {dispatch(addItemToCart(item?.card?.info))}}>
            Add
        </button>

        </div>
    </div>
))}
</div>
)

}


export default ItemList;