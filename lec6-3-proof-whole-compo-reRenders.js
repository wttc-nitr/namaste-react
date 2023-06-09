import { LOGO_URL } from "./src/utils/constants";
import { useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  console.log("Header rendered"); // look at console

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo-image" />
      </div>

      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>Your Account</li>
          <li>Cart</li>
          <li>Contact us</li>
          <button
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
