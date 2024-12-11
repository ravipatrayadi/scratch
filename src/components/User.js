import { useState } from "react";

const User = (props) => {
    const { name, location, mailId } = props;

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(2);

    return (
        <>
            <div className="user-container">
                <h2>Count1 : {count1} </h2>
                <h2>Count2 : {count2} </h2>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Mail-Id : {mailId}</h4>
            </div>
        </>
    )
}

export default User; 
