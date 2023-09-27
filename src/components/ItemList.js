const ItemList = ({items}) => {
  // console.log(items);

  return (
    <>
      {
        items.map(item => (
          <div key={item?.card?.info?.id} className="m-2 pt-2 pb-3 text-left border-gray-300 border-b-2 last:pb-0 last:border-none">
            {/* name + price */}
            <div className="my-2 text-base font-light">
              {item?.card?.info?.name} - ₹{item?.card?.info?.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}
            </div>

            {/* description */}
            <p className="text-xs font-light">{item?.card?.info?.description}</p>
          </div>
        ))
      }
    </>
  );
};

export default ItemList;
