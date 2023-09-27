import { useParams } from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";
import useResMenu from "../utils/useResMenu";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo?.length === 0) return <h2>Restaurant-Menu page, loading...</h2>;

  const { name, cuisines, costForTwoMessage, avgRating} =
    resInfo?.cards[0]?.card?.card?.info;
  
  const {cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;
  
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter (
      c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* categories accordians */}
      {categories.map((category) => <MenuCategory data={category?.card?.card}/>)}
    </div>
  );
};

export default Menu;
