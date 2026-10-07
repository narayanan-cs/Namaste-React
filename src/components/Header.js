import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    console.log("Header render");
    const { loggedInUser } = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    const [btnName, setBtnName] = useState("Login");

    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img src="" alt= "Logo"/>
            </div>
            
            <div className="flex items-center">
                <ul className="flex al p-4 m-4">
                <li className="px-4">Online Status: {onlineStatus?"✔":"¯\_(ツ)_/¯"}</li>    
                <li className="px-4"><Link to="/" >Home</Link></li>    
                <li className="px-4"><Link to="/about" >About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4 cursor-pointer"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                <li><button onClick ={()=>btnName === "Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button> </li>
                <li className="px-4 font-bold">Welcome, {loggedInUser}!</li>
                </ul>
                
            </div>
        </div>
        

    )
}

export default Header;