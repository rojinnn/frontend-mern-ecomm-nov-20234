import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul nav-right">
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
