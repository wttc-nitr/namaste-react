import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";

const Menu = () => {
  const [resInfo, setResInfo] = useState([]);

  // const params = useParams();
  // console.log(params);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setResInfo(json?.data);
  };

  if (resInfo?.length === 0) return <h2>Menu page, loading...</h2>;

  // console.log(resInfo);

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  // || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(2,-2)
  // console.log(itemCards);

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <img src={RES_IMG_URL + cloudinaryImageId}></img>
      </div>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
