import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  // console.log("Header rendered"); // when setBtn is called, the whole Header component is rendered but only btn is updated.
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-sky-50 shadow-lg h-[70px] sticky top-0 z-50">
      <div className="logo-container">
        <img className="w-38 h-[70px] rounded-lg" src={LOGO_URL} alt="logo-image" />
      </div>

      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="mx-4">
            Online: {onlineStatus ? '✅' : '❌'}
          </li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4">Cart</li>
          <li className="mx-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="mx-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button className="mx-4"
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
