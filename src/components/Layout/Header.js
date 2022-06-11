import { Fragment } from "react";
import styles from "./Header";

import meals from "../../assets/meals.jpg";

function Header(props) {
  return (
    <Fragment>
      <header>
        <h1>RightMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={meals} alt="a table with nice food" />
      </div>
    </Fragment>
  );
}

export default Header;
