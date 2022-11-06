import style from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ url, nome }) {
  const [menu, setMenu] = useState();

  return (
    <header>
      <nav>
        <a className={style.logo} href="/">
          <Link to="/">Dinossauria</Link>
        </a>

        <ul className={menu ? style.navListActive : style.navList}>
          <li>
            <Link to="/farenozoico">Farenozóico</Link>
          </li>
          <li>
            <Link to="/proterozoico">Proterozóico</Link>
          </li>
          <li>
            <Link to="/arqueano">Arqueano</Link>
          </li>
          <li>
            <Link to="/hadeano">Hadeano</Link>
          </li>         
        </ul>

        <div className={style.mobileMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
