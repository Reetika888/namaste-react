import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    console.log("loggedInUser",loggedInUser);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-200 lg:bg-green-200">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                 <ul className="flex">
                    <li className="px-4">
                        Online Status: {
                                onlineStatus ?  "🟢" : "🔴"
                        }
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "login" ? setBtnNameReact("Logout")  : setBtnNameReact("login")
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                 </ul>
        </div>

        </div>
    )
           
};

export default Header;