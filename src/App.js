import React , { lazy , Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import  { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import RestauarantMenu from "./components/RestauarantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const AppLayout = ()=> {
    const [userName,setUserName] = useState();

    // Authentication
    useEffect(()=>{
    // Make an API Call and send username and password
    const data = {
        name: "Reetika Rani"
    }
    setUserName(data.name);
    },[]); 

    
    return (
        // Default Value
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            {/* Reetika Rani */}
        <div className="app">
        {/* <UserContext.Provider value={{loggedInUser: "Elon Musk"}}> */}
            {/* Elon Musk */}
            <Header />
        {/* </UserContext.Provider> */}
            <Outlet />  
        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
               path: "/",
               element: <Body />,
            },
            {
                path: "/about",
                element:<Suspense fallback={<h1>About Loading.....</h1>}><About /></Suspense>,
            },
            {
                path : "/contact",
                element: <Contact />,
            },
            {
                path : "/grocery",
                element:<Suspense fallback={<h1>Loading.......</h1>}><Grocery/></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestauarantMenu />,
            }
        ],
        errorElement: <Error />,
    }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router = {appRouter} />  ); 