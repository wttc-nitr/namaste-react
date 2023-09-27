import ItemList from "./ItemList";

const MenuCategory = ({data}) => {
  // console.log(data);

  return (
    <div className="w-6/12 mx-auto my-5 bg-gray-100 shadow-lg p-4">
      {/* header */}
      <div className="flex justify-between cursor-pointer">
        <span className="text-xl">{data.title} ({data.itemCards?.length})</span>
        <span className="font-bold text-cyan-950">▽</span>
      </div>

      {/* accordion body */}
      <div className="font-light text-sm">
        <ItemList items={data.itemCards} />
      </div>
    </div>
  )
};

export default MenuCategory;