import { useState } from "react"



const useFilterSearch = () => {
    const [searchWord, setSearchWord] = useState("");

    const searchFilter = (e) => {
        setSearchWord(e.target.value);
    }

    return ({ searchWord, searchFilter });
}



export default useFilterSearch; 
