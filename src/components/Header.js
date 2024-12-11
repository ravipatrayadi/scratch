import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatusState from "../utils/useLoginState";

const Header = () => {
    const [logState, setLogState] = useState("Login");

    const setState = () => {
        (logState.toLowerCase() === "login") ? setLogState("Logout") : setLogState("Login");
    }

    const log = useStatusState();

    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="w-56" src={LOGO_LINK} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4" >{log ? '🟢' : '🔴'}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart</Link></li>
                    <button className="px-4" onClick={setState}>{logState}</button>
                </ul>
            </div>
        </div>
    )
}




export default Header; 
