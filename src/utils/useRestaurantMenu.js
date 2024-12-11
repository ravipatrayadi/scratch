import { useEffect, useState } from "react"

import { MENU_LINK } from "./constants";


const useRestaurantMenu = (resId) => {
    const [menuList, setMenuList] = useState([]);
    const [restaurantName, setRestaurantName] = useState("");

    const fetchData = async () => {
        const data = await fetch(MENU_LINK + resId);

        const res = await data.json();


        const menu = res.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        const resName = res.data?.cards[0]?.card?.card?.text;

        setRestaurantName(resName);
        setMenuList(menu);

    }


    useEffect(() => {
        fetchData();
    }, []);


    return (
        { restaurantName, menuList }
    )
}


export default useRestaurantMenu;
