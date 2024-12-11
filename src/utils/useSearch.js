const useSearch = (dataList, searchWord) => {
    const newList = dataList.filter((restaurant) => {
        const resName = restaurant.info.name;
        if (resName.toLowerCase().includes(searchWord)) {
            return restaurant;
        }
    })
    return newList;
}


export default useSearch; 