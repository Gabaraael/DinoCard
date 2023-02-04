import { FaGithub, FaFrog, FaFish} from "react-icons/fa";
import { GiDimetrodon, GiDinosaurBones, GiDinosaurEgg, GiDinosaurRex } from "react-icons/gi";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul className={style.navList}>
        <li>
          <Link to="/github">
            <FaGithub></FaGithub>
          </Link>
        </li>
        <li>
          <Link to="/frog">
            <FaFrog></FaFrog>
          </Link>
        </li>
        <li>
          <Link to="/fish"><FaFish></FaFish></Link>
        </li>
        <li>
        <Link to="/dimetrodon"><GiDimetrodon></GiDimetrodon></Link>
        </li>
        <li>
        <Link to="/bones"><GiDinosaurBones></GiDinosaurBones></Link>
        </li>
        <li>
        <Link to="/eggs"><GiDinosaurEgg></GiDinosaurEgg></Link>
        </li>
        <li>
        <Link to="/rex"><GiDinosaurRex></GiDinosaurRex></Link>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
