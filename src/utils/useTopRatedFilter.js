

const useTopRatedFilter = (dataList) => {
    const newList = dataList.filter((restaurant) => {
        const rating = parseFloat(restaurant.info.avgRating);
        if (rating >= 4.4) {
            return restaurant;
        }
    })
    return newList;
}

export default useTopRatedFilter;