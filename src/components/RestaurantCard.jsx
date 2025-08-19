import { RES_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;

    const{
        name,
        cuisines,
        avgRating,
        sla
    } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-img" src={RES_URL}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;