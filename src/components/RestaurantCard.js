import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // const { resData } = props;     this one as well as below one, both are correct
  const { resData } = props;
  const { name, cuisines, deliveryTime, cloudinaryImageId } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
