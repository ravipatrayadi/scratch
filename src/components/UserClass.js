import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const { name, location, mailId } = this.props;
        return (
            <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Mail-Id : {mailId}</h4>
            </div>
        )
    }
}

export default UserClass;