import React, { useCallback, useState } from "react";
import { withTranslation } from "react-i18next";
import logo from "../../asset/logo.png";
import BtnLanguage from "../BtnLanguage";
import Mode from "../Mode";
import HambugerMenu from "../HambugerMenu";
import SlideMenu from '../SlideMenu';
import styles from "./style.module.css";

function Header({ t }) {
  const [show, setShow] = useState(false);
  const handleClick = useCallback(show => {
    setShow(show)
  }, []);
  return (
    <div className={styles.header}>
      <HambugerMenu show={show} click={handleClick} />
      <SlideMenu show={show} click={handleClick}/>
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.header__title}>{t("today")}</div>
      <Mode />
      <BtnLanguage />
    </div>
  );
}

export default withTranslation()(Header);
