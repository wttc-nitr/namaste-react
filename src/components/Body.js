import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "../../lec6-2-shimmer-UI";
import { Link } from "react-router-dom";
import { RES_LIST_URL } from "../utils/constants";

const Body = () => {
  // now we use state variable
  const [allRes, setAllRes] = useState([]);
  const [filteredListOfRest, setFilteredListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL); // returns a promise and when that promise is resolved we get the data

    const json = await data.json(); // , now convert the data in json format

    // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setAllRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRest(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                res.info.name.toLowerCase().includes(value.toLowerCase())
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
              (res) => parseInt(res.info.avgRating) >= 4
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
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {<RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
