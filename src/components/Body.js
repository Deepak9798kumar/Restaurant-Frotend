import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurentCardPromted = withPromtedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>please check your internet connection....</h1>
        );

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    };

    const { loggedInUser, setUserName } = useContext(UserContext);

    return (
        <div className="body">
            <div className="flex justify-between">
                <div className="search-container flex items-center m-3 p-3">
                    <input
                        type="text"
                        className="searchBox border border-solid border-gray-400 px-4 py-2 rounded-md mr-3 focus:outline-none focus:border-green-500"
                        placeholder="Search Food or Restaurant"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="searchButton px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="m-3 p-3 flex items-center ">
                    <button
                        className="px-4 py-2 m-4 bg-gray-100 shadow-md hover:bg-gray-200 duration-[.3s] rounded-lg font-medium"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => parseFloat(res.info.avgRating) > 4.2
                            );
                            setFilteredRestaurant(filteredList);
                            console.log(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-3 p-3 flex items-center">
                    <label className="mr-2">Username:</label>
                    <input
                        className="usernameInput border border-solid border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id}>
                        {restaurant.info.promoted ? (
                            <RestaurentCardPromted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Body;
