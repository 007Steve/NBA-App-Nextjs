import React from "react";
import styles from "../../styles/Nav.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Avatar } from "@material-ui/core";
function NaV() {
  return (
    <div className={styles.nav}>
      <img
        className={styles.nav__img}
        src="https://pngimg.com/uploads/nba/nba_PNG6.png"
        alt=""
      />
      <ul className={styles.nav__linkContainer}>
        <li className={styles.nav__link}>Score</li>
        <li className={styles.nav__link}>Stats</li>
        <li className={styles.nav__link}>Players</li>
        <li className={styles.nav__link}>Team</li>
      </ul>
      <div className={styles.nav__iconsContainer}>
        <Avatar className={styles.nav__icon} src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_400_400/0/1600449353015?e=1624492800&v=beta&t=M9Os0oxnzgkhsXOGHH9hnnWkzcV2vsAdYs9PO1lmEMg" />
        <ArrowDropDownIcon className={styles.nav__icon} />
      </div>
    </div>
  );
}

export default NaV;
