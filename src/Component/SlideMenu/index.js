import classnames from "classnames";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { withTranslation } from "react-i18next";
import user from "../../asset/user.svg";
import styles from "./style.module.css";

function SlideMenu({ t, show, click }) {
  const handleClose = () => {
    click(false);
  };
  const location = useLocation()
  return (
    <div
      className={classnames(styles.slideMenu, {
        [styles["slideMenu-show"]]: show
      })}
    >
      <div className={styles.slideMenu__overlay} onClick={handleClose}></div>
      <div className={styles.slideMenu__container}>
        <div className={styles.slideMenu__header}>
          <span className={styles.slideMenu__header__welcom}>
            {t("welcom")}
          </span>
          <img
            className={styles.slideMenu__header__image}
            src={user}
            alt="user"
          />
          <div className={styles.slideMenu__header_content}>
            <span className={styles.slideMenu__header__usename}>
              duyen@gmail.com
            </span>
            <span className={styles.slideMenu__header__title}>Free plan</span>
          </div>
        </div>
        <div className={styles.slideMenu__content}>
          <ul className={styles.slideMenu__content__menu}>
            <li
              className={classnames({
                [styles["slideMenu__content__menu-active"]]: "/" === location.pathname
              })}
            >
              <Link to="/" onClick={handleClose}>
                {t("home")}
              </Link>
            </li>
            <li
              className={classnames({
                [styles["slideMenu__content__menu-active"]]: "/add" === location.pathname
              })}
            >
              <Link to="/add" onClick={handleClose}>
                {t("add-city")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(SlideMenu);
