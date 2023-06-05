// pasted from Body.js

import RestaurantCard from "./src/components/RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  // now we use state variable
  const [resList2, setresList2] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.151897276568782&lng=83.55410561528322&page_type=DESKTOP_WEB_LISTING"
    ); // returns a promise and

    const json = await data.json(); // , and when that promise is resolved we get the data in json format

    console.log(json);

    setresList2(json?.data?.cards[0]?.data?.data?.cards);
  };

  // conditional rendering
  /*
  if (resList2.length === 0) {
    return <h2>Loading, please wait...</h2>;
  } else

  OR
  */
  return resList2.length === 0 ? (
    <h2>Loading, please wait...</h2>
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList2.filter(
              (res) => parseInt(res.data.avgRating) >= 4
            );

            setresList2(filteredList); // change the value of resList2, we can only change it using setresList2 method
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList2.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
