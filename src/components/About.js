import User from "./User";
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                {/* <User name="Ravi" location="Hyderabad" mailId="ravipatrayadi@gmail.com" /> */}
                <UserClass name="Ravi" location="Hyderabad" mailId="ravipatrayadi@gmail.com" />
            </>
        );
    }
}


export default About;

