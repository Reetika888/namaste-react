import React from "react";
import ReactDOM  from "react-dom/client";


const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("div",{},"I am h2 tag")]),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("div",{},"I am h2 tag")])]);

console.log(parent);
const heading =  React.createElement("h1",{id: "heading"},"Hello World from React!");
console.log(heading); //object or react element
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);