// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";


const Body = () => {

    //Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    // Whenever a state variable updates, react triggers a reconciliation cycle(re-renders the component)
    console.log(searchText);

    useEffect(()=>{
        console.log("useEffect Called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api");

        const json = await data.json();
        const restaurants = json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(item => item.info);
        // console.log(restaurants);
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    }

    if(listOfRestaurants.length === 0) 
        return(
        <Shimmer/>
    )
    

    return (listOfRestaurants.length === 0) ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                    className="search-box"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        console.log(searchText);

                        const filteredRestaurants = listOfRestaurants.filter(
                            (res)=>res.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={ () => {
                    const filteredList = listOfRestaurants.filter(
                        res => res.avgRating>=4.5
                    )
                    setFilteredRestaurants(filteredList);
                    // console.log(listOfRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((resObj) => (
                    <RestaurantCard key={resObj.id} resData = {resObj}/>
                ))}
            </div>
        </div>
        )
}

export default Body;