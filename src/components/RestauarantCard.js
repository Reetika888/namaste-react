import { CDN_URL } from "../utils/constants"

const RestauarantCard = (props)=> {
    const {resData} = props;
    const {name, cuisines,avgRating,costForTwo,sla } = resData?.info;
    return (
        <div className="m-4 p-4  w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
           <img alt="res-logo" className="rounded-lg" src={CDN_URL+resData.info.cloudinaryImageId} />
           <h3 className="font-bold py-4 text-xl">{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating}</h4>
           <h4>{costForTwo}</h4>
           <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}


// Higher Card Component
// Input - Restauarant Card
// Ouput - Restaurant Card with label(promoted)

export const withPromotedLabel = (RestauarantCard) => {
  return (props) => {
     return (
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestauarantCard {...props} />
        </div>
     )
  }
}



export default RestauarantCard;