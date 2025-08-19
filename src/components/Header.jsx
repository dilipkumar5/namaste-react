import { useState } from "react";

const Header = () => {
    let [btnName, setBtnName] = useState("login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = "/images/logo.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        setBtnName("logout");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>

        </div>
    )
}

export default Header;