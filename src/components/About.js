import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log(" parent constructor ");
    }

    componentDidMount() {
        console.log("parent component did mount");
        this.timer  = setInterval(()=>{
            console.log("Namaste React OP")
        },1000);
      }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("component will unmount");

    }

    render() {
        console.log("parent render");
        return (
            <div>
                <h1>About component</h1>
                <h2>This is Namaste React Web Series!!!</h2>
                <User />
                <UserClass name={"Reetika (class)"} location={"Delhi"} />
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About component</h1>
//             <h2>This is Namaste React Web Series!!!</h2>
//             <UserClass name={"Reetika (class)"} location={"Delhi"} />
//         </div>
//     )
// }

export default About;