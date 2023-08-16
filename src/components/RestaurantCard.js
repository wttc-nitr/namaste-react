import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // const { resData } = props;     this one as well as below one, both are correct
  const { resData } = props;
  const {
    name,
    cuisines,
    deliveryTime,
    cloudinaryImageId,
    avgRating,
    address,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-slate-300 rounded-xl hover:bg-slate-400 hover:shadow-xl">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold text-lg my-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} min</h4>
      <h4>{avgRating} Ratings</h4>
      <h4>Address: {address}</h4>
    </div>
  );
};

export default RestaurantCard;
