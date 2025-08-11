import React from "react";
import ReactDOM from "react-dom/client";
import logo from '/images/logo.png';


/*
 * Header
   - Logo
   - Nav Items
 * Body
   - Search
   - Restaurant Container
        - Restaurant cards
            - Image, Name of res, rating, cuisine, delivery time
 * Footer
   - Copyright
   - Address
   - Links
   - Contact info
 */

const Header = () => {
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
                </ul>
            </div>

        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const{name, cuisines, avgRating, deliveryTime } = resData?.data;
    // console.log(resData);
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-img" src="https://tb-static.uber.com/prod/image-proc/processed_images/2bd3ad3aacf5927588f4dae8236cf9fc/db809eadd12d21eb61044e0f3bf7c9b7.jpeg"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

const resList = [
  {
    data: {
      id: "255655",
      name: "Cake & Cream",
      cloudinaryImageId: "ac57cc371e73f96f812613f58457aca3",
      areaName: "Jairaj Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Hot-dog", "Pastry", "Cake", "Thick-shake"],
      avgRating: 4.3,
      veg: true,
      parentId: "54670",
      avgRatingString: "4",
      totalRatingsString: "20+",
      deliveryTime: "40 mins"
    }
  },
  {
    data: {
      id: "350363",
      name: "Haldiram's Sweets and Namkeen",
      cloudinaryImageId: "25c3a7d394d6c5556b134385f7d665b0",
      areaName: "City Center",
      costForTwo: "₹300 for two",
      avgRating: 4.6,
      veg: true,
      cuisines: ["North Indian", "South Indian", "Chinese", "Pizzas", "Fast Food"],
      parentId: "391465",
      avgRatingString: "4.6",
      totalRatingsString: "100+"
    }
  },
  {
    data: {
        id: "154891",
        name: "Rasraj Restaurant",
        cloudinaryImageId: "egbr63ulc8h1zgliivd8",
        locality: "Civil Line",
        areaName: "Civil Lines",
        costForTwo: "₹250 for two",
        cuisines: [ "North Indian", "South Indian", "Street Food", "Chinese", "Pizzas", "Fast Food" ],
        avgRating: 4.2
    }
 },
 {
    data: {
        id: "745961",
        name: "Balaji Restaurant",
        cloudinaryImageId: "b8672fe52944c3599ea324d99d608300",
        locality: "Sai Rubber Stamp",
        areaName: "Jairaj Nagar",
        costForTwo: "₹149 for two",
        cuisines: ["South Indian", "North Indian"],
        avgRating: 4.8,
        veg: true
    }
 }
];


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((resObj) => (
                    <RestaurantCard key={resObj.data.id} resData = {resObj}/>
                ))}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);