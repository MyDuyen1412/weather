import React from "react";
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import add_icon from '../../asset/add.svg';
import city from '../../asset/cityscape.svg';
import styles from "./style.module.css";

function AddCity({t}) {
  return (
    <Link className={styles.add} to={"/add"}>
      <div className={styles.add__container}>
        <span>{t('add-city')}</span>
        <div className={styles.add__icon}>
            <img src={add_icon} alt="add"/>
        </div>
        <div className={styles.add__image}>
            <img src={city} alt="city"/>
        </div>
      </div>
    </Link>
  );
}

export default withTranslation()(AddCity);
