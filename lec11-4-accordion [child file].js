import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({data, showItems, setIndex}) => {
  // console.log(data);

  const handleClick = () => {
    setIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-5 bg-gray-100 shadow-lg p-4">
      {/* header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick} title="Click to show/hide Menu">
        <span className="text-xl">{data.title} ({data.itemCards?.length})</span>
        <span className="font-bold text-cyan-950">▽</span>
      </div>

      {/* accordion body */}
      <div className="">
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  )
};

export default MenuCategory;