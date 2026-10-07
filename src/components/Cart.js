import { useSelector, useDispatch } from "react-redux";
import {CDN_URL} from "../utils/constants.js";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((state)=> state.cart.items);
    const dispatch = useDispatch();
    
    return (<div className="p-2 m-2">
        <button className="bg-green-400 text-white m-4 p-2 rounded-lg cursor-pointer" onClick={() => {dispatch(clearCart())}}>
                                       Clear Cart
                                   </button>
        
        <h1>Cart</h1>
                        
        {cartItems.length === 0 ? (
            <p>Cart is empty</p>
        ) : (
            <ul>
                {cartItems.map((item) => (
                    <div data-testid="food-items" key={item.id} className="p-2 m-2 bg-gray-100 border-black shadow-lg text-left">
                           
                            <img src={CDN_URL + item.imageId} alt = "image" className="rounded-lg"/>
                            <div className="py-2">
                            <span>{item.name}</span>
                            <span> - ₹ {item.price/100}</span>
                            </div>
                            <div className="flex justify-between items-center">
                            <p className="text-gray-600 text-left">{item.description}</p>
                            </div>
                        </div>
                ))}
            </ul>
        )}
    </div>)
} 

export default Cart;