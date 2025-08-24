import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        console.log("fetch Menu");
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://dilipkumar5.github.io/restaurant-api/restaurants/restaurant-"+resId+".json"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    };

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwo, rating, deliveryTime, menu, location} = resInfo;
    console.log(menu);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p><b>{cuisines.join(", ")}</b> - {costForTwo} for two</p>
            <h3>{deliveryTime}</h3>
            <p>{rating}</p>
            <h3>Menu</h3>
            {menu.map( (item) =>
                <li key = {item.name}> {item.name} - ${item.price} </li>
            )}
            <p>------------</p>
            <p>{location}</p>
        </div>
    )
}

export default RestaurantMenu;