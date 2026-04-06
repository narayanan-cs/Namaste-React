import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    console.log("Header render");
    const onlineStatus = useOnlineStatus();
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src="" alt= "Logo"/>
            </div>
            
            <div >
                <ul className="nav-items">
                <li>Online Status: {onlineStatus?"✔":"¯\_(ツ)_/¯"}</li>    
                <li><Link to="/" >Home</Link></li>    
                <li><Link to="/about" >About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li>Cart </li>
                
                </ul>
                <button onClick ={()=>btnName === "Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
            </div>
        </div>
        

    )
}

export default Header;