import { CDN_URL, LOGO_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return (
        <div>
               {
                  items.map((item)=>(
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                     <div className="w-9/12">
                        <div className="py-2">
                           <span className="font-bold">{item.card.info.name}</span>
                           <span className="font-bold"> - ₹ {item.card.info.price ? item.card.info.price / 100: item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                        <div className="absolute h-2">
                        <button className="p-2 text-xs mx-6 rounded-lg bg-black text-white shadow-lg">Add +</button>
                        </div>
                        {
                        item.card.info.imageId ? <img src={CDN_URL + item.card.info.imageId} /> :
                        <img src= {LOGO_URL} /> 
                        }
                        </div>
                    </div>
                  ))
        
                }
        </div>
    )
}

export default ItemList;