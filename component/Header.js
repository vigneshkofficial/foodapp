import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    //let btn="Login";
    const [btnreact,setbtnreact]=useState("Login");
    return(
        <div className="header">
            <div className="logo">
                <img className="logo-img" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link tp="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button 
                    className="login-btn" 
                    onClick={()=>{
                       btnreact== "Login"?setbtnreact("Logout") : setbtnreact("Login");
                    }}>{btnreact}
                    </button>
                </ul>
            </div>
            
        </div>
    )
    };

export default Header;