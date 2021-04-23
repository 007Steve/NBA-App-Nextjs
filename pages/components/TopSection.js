import React from "react";
import styles from "../../styles/TopSection.module.css";
function TopSection() {
  return (
    <div className={styles.topSection}>
      <div className={styles.topSection__leftContainer}>
        <h1 className={styles.topSection__name}>Stephen Plummer</h1>
        <div className={styles.topSection__team}>
          <img
            className={styles.topSection__teamImg}
            src="https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/por.png"
            alt=""
          />
          <h3 className={styles.topSection__teamText}>Portland Blazers</h3>
        </div>
        <div className={styles.topSection__heightContainer}>
          <div className={styles.topSection__block}>
            <h4 className={styles.topSection__title}>Height</h4>
            <h3 className={styles.topSection__blocktitle}>
              <span className={styles.topSection__blockSpan}>6</span>ft
              <span className={styles.topSection__blockSpan}>3</span>in
            </h3>
          </div>
          <div className={styles.topSection__block}>
            <h4 className={styles.topSection__title}>Weight</h4>
            <h3 className={styles.topSection__blocktitle}>
              <span className={styles.topSection__blockSpan}>185</span>lbs
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.topSection__middleContainer}>
        <h1 className={styles.topSection__middleTitle}>Portland</h1>
      </div>
      <div className={styles.topSection__rigthContainers}>
        
        <div>
            <form action=""className={styles.topSection__form}>
                <h4>Search Player</h4>
                <input type="text" name="" id=""/>
                <div className={styles.topSection__formResults}>
                <h4>Lebron James</h4>
                <h4>#23</h4>
            </div>
            <div className={styles.topSection__formResults}>
                <h4>Lebron James</h4>
                <h4>#23</h4>
            </div>
            <div className={styles.topSection__formResults}>
                <h4>Lebron James</h4>
                <h4>#23</h4>
            </div>
            </form>
       
           
        </div>

      </div>
    </div>
  );
}

export default TopSection;
