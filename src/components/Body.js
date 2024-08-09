import RestauarantCard from "./Restauarant";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
const [listOfRestaurants,setListOfRestauarants] = useState([]);

useEffect(()=>{
  console.log("use effect called");
  fetchData();
},[]);

const fetchData = async() => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  // optional chaining
  setListOfRestauarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

    return listOfRestaurants === 0 ? <Shimmer /> :  (
      <div className="body">
          <div className="filter">
              <button className="filter-btn" onClick={()=>{
               const filteredList = ListOfRestaurants.filter((res)=>     
                res.info.avgRating > 4.3   
               )
                setListOfRestauarants(filteredList)
              }
              }> Top Rated Restaurants </button>
          </div>
          <div className="res-container">
          {
              listOfRestaurants.map((restaurant)=> (<RestauarantCard key={restaurant.info.id} resData = {restaurant} />)
          )
          }
          </div>
      </div>
    )
  }

  export default Body;