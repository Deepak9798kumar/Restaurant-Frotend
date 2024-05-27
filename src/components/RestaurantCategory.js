import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
// const [showItems, setShowItems]=useState(false);

  const title = data.title || "Default Title";

  const handleClick = () =>{
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer"
        onClick={handleClick}
        >
          <span className="font-bold text-lg">{title} ({data.itemCards.length})</span>
          <span>⬇</span>
        </div>
      {showItems && <ItemList items={data.itemCards}/>}
      </div> 
    </div>
  );
};

export default RestaurantCategory;
