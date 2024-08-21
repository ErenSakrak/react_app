import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Ana Sayfa</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/hakkinda">Hakkında</Link>
          </li>
          <li>
            <Link to="/iletisim">İletişim</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
