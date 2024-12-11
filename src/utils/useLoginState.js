import { useState } from "react";

const useStatusState = () => {
    const [logValue, setLogValue] = useState(true);

    window.addEventListener("offline", () => {
        setLogValue(false);
    });

    window.addEventListener("online", () => {
        setLogValue(true);
    });

    return logValue;
}


export default useStatusState; 