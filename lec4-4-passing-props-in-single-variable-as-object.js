import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://dynamic.brandcrowd.com/asset/logo/94def15e-5330-48a2-9ed6-4992a21f4b7f/logo-search-grid-1x?logoTemplateVersion=1&v=637682366529570000"
          alt="logo-image"
        />
      </div>

      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>Your Account</li>
          <li>Cart</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // const { resData } = props;     this one as well as below one, both are correct
  const { resName, cuisine, rating, eta } = props.resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg"
      />

      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{eta}</h4>
    </div>
  );
};

const resObj = {
  resName: "KFC",
  cuisine: "Fried Chicken, Burger",
  rating: "4.3",
  eta: "20 min",
};

const Body = () => {
  // below, resData is one of the prop, with value resObj, So in RestaurantCard-> const {resData} = props;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
