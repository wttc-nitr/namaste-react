import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // now we use state variable
  const [resList2, setresList2] = useState(resList);
  /**
   * or, Array destructuring
   *  const Res = useState(resList);
   *  const [resList2, setresList2] = Res;
   *    or,
   *    const resList2 = Res[0], setresList2 = Res[1];
   */

  return (
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
