import { API_LINK } from "./constants";
import { useState, useEffect } from "react";

const useFetchData = () => {
    const [dataList, setDataList] = useState([]);

    const fetchData = async () => {
        const data = await fetch(API_LINK)
        const res = await data.json();
        setDataList(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    useEffect(() => {
        fetchData();
    }, [])

    return dataList;

}

export default useFetchData; 