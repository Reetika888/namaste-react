import React from "react";
class UserClass extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        userInfo : {
          name: "Dummy Name",
          location: "Default",
        },
      };
      console.log("child constructor" + this.props.name);
    }

    async componentDidMount() {
      console.log("child component did mount" + this.props.name);
      const data = await fetch("https://api.github.com/users/Reetika444");
      const json = await data.json();
      console.log("json",json)
      this.setState({
        userInfo: json,
      })
    }

    componentDidUpdate() {
      console.log("update");
    }

    render() {
      console.log("child render"+this.props.name);
      const {login,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                 <h2>Name: {login}</h2>
                 <h3>Image URL: {avatar_url}</h3>
                 <img src={avatar_url} alt="dummy-image"/>
                 <h4>Contact: reetikadahiya444@gmail.com</h4>
            </div>
           ); 
    }
}

                 
export default UserClass;