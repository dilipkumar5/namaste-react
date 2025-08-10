// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")
    ])
]);

console.log(parent);
//JSX - HTML like syntax
function Title(){ 
    return(
        <h1 className="head">
        Namaste react from JSX
        </h1>
    )
};
const number = 1000;
//Functional Component
// Component composition - 
const HeadingComponent = () => {
    return (
        <div id="container">
            <h2>{number}</h2>
            <Title/>
            <h1 className="heading">This is a functional component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);