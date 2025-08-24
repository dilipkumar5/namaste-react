import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let [btnName, setBtnName] = useState("login");
    console.log("Header Rendered");

    //If there is no dependency array => useEffect is called on every render.
    //If dependency array is empty = [] => useEffect is called on initial render(just once).
    //If dependency array is [btnName] => useEffect is called every time btnName is updated.
    useEffect(()=>{
        console.log("useEffect called");
    }, [btnName]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = "/images/logo.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="cart">Cart</Link>
                    </li>
                    <button
                        className="login"
                        onClick={()=>{
                            btnName==="login"
                            ? setBtnName("logout")
                            : setBtnName("login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>

        </div>
    )
}

export default Header;