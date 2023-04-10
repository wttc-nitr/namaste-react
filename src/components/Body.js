import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  // below, resData is one of the prop, with value resList, So in RestaurantCard-> const {resData} = props;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
