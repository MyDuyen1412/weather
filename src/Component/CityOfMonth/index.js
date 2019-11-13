import React, {useContext} from "react";
import { withTranslation } from "react-i18next";
import Context from '../../context/Context.js';
import Image from '../Image';
import styles from "./style.module.css";
import { convertDate } from "../../utils/datasources.js";

function CityOfMonth({ t, description, temp, name }) {
  const context = useContext(Context);
  return (
    <>
      <div className={styles.cityOfMonth__overlay}></div>
      <div className={styles.cityOfMonth__content}>
        <h3 className={styles.cityOfMonth__content__title}>
          {t("city-of-month")}
        </h3>
        <span className={styles.cityOfMonth__content__date}>
          {convertDate(context.language, new Date())}
        </span>
        <div className={styles.cityOfMonth__content__icon}>
          <Image type={description} />
        </div>
        <span className={styles.cityOfMonth__content__temp}>
          {Math.floor(temp - 273.15)}°
        </span>
        <span className={styles.cityOfMonth__content__name}>
          {name}
        </span>
        <span className={styles.cityOfMonth__content__description}>
          {description}
        </span>
      </div>
    </>
  );
}

export default withTranslation()(CityOfMonth);
