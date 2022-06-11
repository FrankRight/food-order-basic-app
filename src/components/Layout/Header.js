import { Fragment } from "react";
import styles from "./Header.module.css";

import meals from "../../assets/meals.jpg";

function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>RightMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="a table with nice food" />
      </div>
    </Fragment>
  );
}

export default Header;
