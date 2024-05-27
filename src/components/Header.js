import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-green-100 shadow-lg">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-32" alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-5">
            <Link to="/" className="links hover:text-blue-500">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="links hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="links hover:text-blue-500">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/cart" className="links font-bold hover:text-blue-500">
              Cart({cartItems.length} items)
            </Link>
          </li>
          <li
            className="cursor-pointer hover:text-blue-500"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </li>

          <li className="px-4">
            <Link className="links hover:text-blue-500">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
