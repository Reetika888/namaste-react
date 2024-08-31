import RestauarantCard from "./Restauarant";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
const [listOfRestaurants,setListOfRestauarants] = useState([]);
const [searchText,setSearchText]=useState("");
const [listOfRestaurantsList,setListOfRestauarantsList] = useState([]);

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

const fetchData = async() => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  // optional chaining
  setListOfRestauarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setListOfRestauarantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


const onlineStatus = useOnlineStatus();

if(onlineStatus == false) return <h1>Looks like you are offline!! please check your internet connection;</h1>

    return listOfRestaurants === 0 ? <Shimmer /> :  (
      <div className="body">
          <div className="filter">
              <div className="search">
                <input type="text" className="search-box" onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
                <button onClick={
                  ()=>{
                    // Filter the restauarent cards and update the ui
                     handleSearch()
                  }
                }>Search</button>
              </div>
              <button className="filter-btn" onClick={()=>{
               const filteredList = listOfRestaurants.filter((res)=>     
                res.info.avgRating > 4.3   
               )
                setListOfRestauarants(filteredList)
              }
              }> Top Rated Restaurants </button>
          </div>
          <div className="res-container">
          {
              listOfRestaurants.map((restaurant)=> (
             <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant?.info?.id}> <RestauarantCard  resData = {restaurant} />
             </Link>
              )
          )
          }
          </div>
      </div>
    )
  }

  export default Body;