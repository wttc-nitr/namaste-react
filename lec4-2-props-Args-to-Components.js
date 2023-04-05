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

// Props are agruments to Functional components; Props are objects
// We can say, passing data dynamically to a component
const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg"
      />

      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.eta}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="KFC"
          cuisine="Fried Chicken, Burger"
          rating="4.3"
          eta="20 min"
        />
        <RestaurantCard
          resName="Dominoes"
          cuisine="Pizza, Beverages"
          rating="4.4"
          eta="25 min"
        />
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
