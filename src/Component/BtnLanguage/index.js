import classnames from "classnames";
import React, { useContext, useState } from "react";
import { withTranslation } from "react-i18next";
import flag_en from "../../asset/flag_en.svg";
import flag_vn from "../../asset/flag_vn.png";
import Context from '../../context/Context.js';
import styles from "./style.module.css";

function BtnLanguage({ i18n }) {
  const [check, setCheck] = useState("en");
  const context = useContext(Context)
  const changeLng = lng => {
    i18n.changeLanguage(lng);
    setCheck(lng);
    context.handleLanguage(lng);
  };
  return (
    <div className={styles.btnLanguage}>
      <img
        className={classnames({ [styles.btnLanguage__show]: check === "vn" })}
        src={flag_vn}
        alt="vietnam"
        onClick={() => changeLng("vn")}
      />
      <img
        className={classnames({ [styles.btnLanguage__show]: check === "en" })}
        src={flag_en}
        alt="english"
        onClick={() => changeLng("en")}
      />
    </div>
  );
}

export default withTranslation()(BtnLanguage);
