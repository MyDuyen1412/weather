import React from "react";
import { withTranslation } from "react-i18next";
import success from "../../asset/success.svg";
import styles from "./style.module.css";

function Alert({ t }) {
  return (
    <div className={styles.alert}>
      <span>{t("success")}</span>
      <img src={success} alt="success" />
    </div>
  );
}

export default withTranslation()(Alert);
