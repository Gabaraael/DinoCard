import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ url, nome }) {
  // const [menu, setMenu] = useState();

  return (
    <header>
      <nav>        
        <ul className={style.navList}>
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
        <h2 className={style.logo}>
          <Link to="/login">Login</Link>
        </h2>        
      </nav>
    </header>
  );
}
export default Navbar;
