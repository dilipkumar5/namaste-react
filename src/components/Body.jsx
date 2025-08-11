import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    //Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // Normal JS Variable
    // let listOfRestaurantsJS = [
    //     {
    //         data: {
    //             id: "255655",
    //             name: "Cake & Cream",
    //             cloudinaryImageId: "ac57cc371e73f96f812613f58457aca3",
    //             areaName: "Jairaj Nagar",
    //             costForTwo: "₹200 for two",
    //             cuisines: ["Bakery", "Hot-dog", "Pastry", "Cake", "Thick-shake"],
    //             avgRating: 4.3,
    //             veg: true,
    //             parentId: "54670",
    //             avgRatingString: "4",
    //             totalRatingsString: "20+",
    //             deliveryTime: "40 mins"
    //         }
    //     },
    //     {
    //         data: {
    //             id: "350363",
    //             name: "Haldiram's Sweets and Namkeen",
    //             cloudinaryImageId: "25c3a7d394d6c5556b134385f7d665b0",
    //             areaName: "City Center",
    //             costForTwo: "₹300 for two",
    //             avgRating: 4.6,
    //             veg: true,
    //             cuisines: ["North Indian", "South Indian", "Chinese", "Pizzas", "Fast Food"],
    //             parentId: "391465",
    //             avgRatingString: "4.6",
    //             totalRatingsString: "100+"
    //         }
    //     }
    // ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ () => {
                    const filteredList = listOfRestaurants.filter(
                        res => res.data.avgRating>=4.5
                    )
                    setListOfRestaurants(filteredList);
                    // console.log(listOfRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((resObj) => (
                    <RestaurantCard key={resObj.data.id} resData = {resObj}/>
                ))}
            </div>
        </div>
    )
}

export default Body;