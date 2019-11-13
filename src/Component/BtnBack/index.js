import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import back from "../../asset/left-arrow.svg";
import styles from "./style.module.css";

function BtnBack({t}) {
  return (
    <Link className={styles.btnBack} to="/">
      <div className={styles.btnBack__circle}></div>
      <img src={back} alt="arrow" className={styles.btnBack__icon} />
      <span className={styles.btnBack__back}>{t("back")}</span>
    </Link>
  );
}

export default withTranslation()(BtnBack);
