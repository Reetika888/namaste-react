import React from "react";
import ReactDOM  from "react-dom/client";

const Title =  function() {
    return (
      <h1 className="heading">Namaste React using JSX 🚀</h1>
    );
};

const title2 = (
    <h1 className="heading">Namaste React using JSX 🚀</h1>
)

// React Functional Component
// Component Composition
const HeadingComponent = () => (
    <div id="container">
        {
            title2
        }
      <h1 className="heading">Namaste React Episode</h1>
      <Title />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);