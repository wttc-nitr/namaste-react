import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "../../lec6-2-shimmer-UI";
import { Link } from "react-router-dom";

const Body = () => {
  // now we use state variable
  const [allRes, setAllRes] = useState([]);
  const [filteredListOfRest, setFilteredListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&page_type=DESKTOP_WEB_LISTING"
    ); // returns a promise and when that promise is resolved we get the data

    const json = await data.json(); // , now convert the data in json format

    // console.log(json);

    setAllRes(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredListOfRest(json?.data?.cards[2]?.data?.data?.cards);
  };
  
  const [value, setValue] = useState(""); // for accessing the input value for filtering

  return filteredListOfRest?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            placeholder="search restaurants..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              //to prevent readonly-input box (*Body-component is renderd each time a key is pressed)
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = allRes.filter((res) =>
                res.data.name.toLowerCase().includes(value.toLowerCase())
              );
              setFilteredListOfRest(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRes.filter(
              (res) => parseInt(res.data.avgRating) >= 4
            );

            setFilteredListOfRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredListOfRest(allRes);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRest?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            {<RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
