const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
    "div", {
        id: "parent"
    },
    [
        React.createElement(
            "div", {
                id: "child1"
            }, [React.createElement("h1", {}, "Hello World1"),
                React.createElement("h1", {}, "Hello World2")
            ]
        ),
        React.createElement(
            "div", {
                id: "child2"
            }, [
                React.createElement("h1", {}, "Hello World3"),
                React.createElement("h1", {}, "Hello World4")
            ]
        )
    ]
);


root.render(parent);



{
    /* <div id = "parent"><div id = "child">
            <h1 id = "myHeader1">hey1</h1>
            <h1 id = "myHeader2">hey2</h1>
        </div>
    </div> */
}