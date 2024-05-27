import { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import UserContext from "../utils/UserContext";



const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser}=useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
      className="m-4 p-4 w-[240px] rounded-lg bg-gray-100 hover:bg-gray-300 "
    >
      <img
        className="w-[250px] h-[150px] rounded-lg"
        src=
        {CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard)=>{
  return (props)=>{
    return(
       <div>
        <label className="absolute bg-black text-white m-2 p-2">Promoted</label>
        <RestaurantCard {...props}/>
       </div>
    );
  };
};

export default RestaurantCard; 