import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const { menuList, restaurantName } = useRestaurantMenu(resId);


    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{restaurantName}</h1>
            {
                <p className="font-bold text-lg">
                    {menuList.map((item) => {
                        const itemName = item?.card?.info?.name;
                        return <li key={item?.card?.info?.id}>{itemName}</li>
                    })}
                </p>
            }
        </div >
    )
}

export default RestaurantMenu; 
