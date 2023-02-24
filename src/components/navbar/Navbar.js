import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({isLoggedIn, username}) {


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
        {isLoggedIn ?
         ( <h2 className={style.logo}>
         <span>Olá, {username}!</span>
        </h2>        
        ): 
        <h2> <Link to="/login">Login</Link></h2>
        }
      </nav>
    </header>
  );
}
export default Navbar;
