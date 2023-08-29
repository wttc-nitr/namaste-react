import { useParams } from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";
import useResMenu from "../utils/useResMenu";

const Menu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo?.length === 0) return <h2>Menu page, loading...</h2>;

  const { name, cuisines, costForTwoMessage, avgRating} =
    resInfo?.cards[0]?.card?.card?.info;
  
  const {cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  return (
    <div className="flex flex-col text-center mt-8">
      <div>
        <h1 className="text-4xl">{name}</h1>
        <img className="my-4 block rounded-md mx-auto" src={RES_IMG_URL + cloudinaryImageId}/>
        <h3>{avgRating} ratings</h3>
      </div>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id} className="my-2 list-disc">
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
