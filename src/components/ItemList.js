const ItemList = ({items}) => {
  console.log(items);

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
      // {
      //   /* now print items from 1 category */
      //   data.map(item => {
      //     const {id, name, price, description} = item?.card?.info;

      //     return (
      //       <div>
      //         <div className="name+price">

      //         </div>

      //         <div className="desciption">

      //         </div>
      //       </div>
      //     )
      //   });
      // }
      // <>
      //   data.map(item => <div></div>)
      // </>
  );
};

export default ItemList;


// const ItemList = ({data}) => {
//   console.log(data);

//   data.map(category => {
//     category.map(item => {
//       const {id, name, price, description} = item?.card?.info;
    
//       return (
//         <>
//           <p key={id}>{name} - Rs. {price}</p>
//         </>
//       );
//     })
//   });
// }

// export default ItemList;