import Shimmer from  "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategory";
import { useState } from "react";

const RestauarantMenu = () => {
    const { resId } = useParams();
    const [showIndex,setShowIndex] = useState(0);
    const [showItems,setShowItems] = useState(true);
    // Abstract fetch data logic and put it into useRestaurantMenu Hook
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null){
        return <Shimmer />
    }

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    const SetShowIndexes = (index)=> {
        setShowIndex(index);
        setShowItems(!showItems);
    }

    const categories =  resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return  ( 
    <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
            {cuisines.join(" , ")} - {costForTwoMessage}
            </p> 
         {/* categories accordion */}
          {
            categories.map((category,index)=>(
                <RestaurantCategories setShowIndex={()=> {SetShowIndexes(index)}} showItems={index === showIndex  && showItems } key={category.card.card.title} data={category?.card?.card}/> 
            ))
          }
    </div>
    )
}
export default RestauarantMenu; 