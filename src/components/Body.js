import RestauarantCard , { withPromotedLabel } from "./RestauarantCard";
import { useState , useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import  UserContext  from "../utils/UserContext";

const Body = () => {
const [listOfRestaurants,setListOfRestauarants] = useState([]);
const [searchText,setSearchText]=useState("");
const [listOfRestaurantsList,setListOfRestauarantsList] = useState([]);
console.log("listOfRestaurants",listOfRestaurants)

const RestauarantCardPromoted = withPromotedLabel(RestauarantCard);
const {loggedInUser,setUserName} = useContext(UserContext);

useEffect(()=>{
  console.log("use effect called");
  fetchData();
},[]);

const handleSearch = ()=>{
  if(searchText === ""){
    setListOfRestauarants(listOfRestaurantsList)
  } else {
  const filteredList = listOfRestaurantsList.filter((item)=>
   item.info.name.toLowerCase().includes(searchText.toLowerCase()) 
  )
  setListOfRestauarants(filteredList)
  }
}
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.7453031&lng=78.5198094&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
const fetchData = async() => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  // optional chaining
  setListOfRestauarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setListOfRestauarantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


const onlineStatus = useOnlineStatus();

if(onlineStatus == false) return <h1>Looks like you are offline!! please check your internet connection;</h1>

    return listOfRestaurants === 0 ? <Shimmer /> :  (
      <div className="body">
          <div className="filter flex items-center">
              <div className="m-4 p-4">
                <input type="text" className="border border-solid border-black" onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={
                  ()=>{
                    // Filter the restauarent cards and update the ui
                     handleSearch()
                  }
                }>Search</button>
              </div>
              <div className="m-4 p-4">
              <button className="px-4 py-2 bg-gray-50 rounded-lg" onClick={()=>{
               const filteredList = listOfRestaurants.filter((res)=>     
                res.info.avgRating > 4.3   
               )
                setListOfRestauarants(filteredList)
              }
              }> Top Rated Restaurants </button>
              </div>
              <div className="search m-4 p-4 flex items-center">
                <label>UserName : </label>
               <input  className="border border-black p-2" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}/>
              </div>
          </div>
          <div className="flex flex-wrap">
          {
              listOfRestaurants?.map((restaurant)=> (
             <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant?.info?.id}>
                {/* {if res is promoted then add promoted label to it} */
                  restaurant?.data?.promoted ? <withPromotedLabel resData = {restaurant}/>   : <RestauarantCard  resData = {restaurant} />
                }
              
             </Link>
              )
          )
          }
          </div>
      </div>
    )
  }

  export default Body;