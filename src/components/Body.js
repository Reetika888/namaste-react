import RestauarantCard from "./Restauarant";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
const [ListOfRestaurants,setListOfRestauarants] = useState(resList);
    return (
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
              ListOfRestaurants.map((restaurant)=> (<RestauarantCard key={restaurant.info.id} resData = {restaurant} />)
          )
          }
          </div>
      </div>
    )
  }

  export default Body;