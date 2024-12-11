import RestaurantCard, { fetchRestaurantPromotedCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useSearch from "../utils/useSearch"
import useFilterSearch from "../utils/useFilterSearch";
import useTopRatedFilter from "../utils/useTopRatedFilter";
import useFetchData from "../utils/useFetchData";


const Body = () => {
    const dataList = useFetchData();
    const [restaurants, setRestaurants] = useState([]);
    const { searchWord, searchFilter } = useFilterSearch();
    const topRatedItems = useTopRatedFilter(dataList);
    const searchItems = useSearch(dataList, searchWord);

    useEffect(() => {
        setRestaurants(dataList);
    }, [dataList])

    // const RestaurantPromotedCard = fetchRestaurantPromotedCard(RestaurantCard);  // Higher Order Component


    return restaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        data-testid="searchInput"
                        className="border border-solid border-black"
                        value={searchWord}
                        onChange={searchFilter}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => setRestaurants(searchItems)}
                    >
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => setRestaurants(topRatedItems)}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap">
                {
                    restaurants.map((restaurant) => {
                        return (
                            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id} >
                                {/* <RestaurantPromotedCard resData={restaurant} />  Higher Order Component   */}
                                <RestaurantCard resData={restaurant} />
                            </Link>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Body;



