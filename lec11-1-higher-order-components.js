/**
 * is a function that takes a component, enhances it , returns the component.
 * It does not modify the contents, it just add something on top of it
 */

// no 'promoted label' available, so not implementing it in main project

import RestaurantCard from "./src/components/RestaurantCard";

const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  }
}

export default withPromotedLabel;

/**
 * how to use it in another module:
 * const RestaurantCardPromoted = withPromotedLabel(RestauranCard);
 * 
 *  restaurant.data.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
 */