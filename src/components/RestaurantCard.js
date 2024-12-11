import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } = resData?.info;
    return (
        < div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" src={CDN_LINK + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg" >{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </ div >
    )
}

export const fetchRestaurantPromotedCard = (RestaurantCard) => {
    return (props) => {
        return (
            <RestaurantCard {...props} />
        )
    }
}


export default RestaurantCard; 