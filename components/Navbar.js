import Link from "next/link";
import Styles from "../styles/Navbar.module.css";
import moment from "moment";
import { styles } from "ansi-colors";

const Navbar = () => {
  const currentTime = Date.now();
  const date = moment(currentTime).format("LLLL");
  return (
    <nav className={Styles.nav}>
      <Link href="/">
        <a className={Styles.logo}>
          News<span className={Styles.bold}>24</span>{" "}
        </a>
      </Link>
      <div className={Styles.dateInfo}>
        <p>{date}</p>
      </div>
    </nav>
  );
};

export default Navbar;
