import classnames from "classnames";
import { withTranslation } from "react-i18next";
import React, { useRef } from "react";
import styles from "./style.module.css";

function Mode({ t }) {
  const checkRef = useRef();
  const light = () => {
    document.documentElement.style.setProperty("--header", "#fff");
    document.documentElement.style.setProperty(
      "--content",
      "linear-gradient(to bottom, #5fa8fc, #6ae1e2)"
    );
    document.documentElement.style.setProperty("--card", "#fff");
    document.documentElement.style.setProperty(
      "--city",
      "linear-gradient(to top,#86dbff 0,#e0c3fc 100%)"
    );
    document.documentElement.style.setProperty(
      "--city-overlay",
      "linear-gradient(-225deg,#fff 0,#ffe29f 10%,#ffa99f 48%,#ffd1ff 100%)"
    );
    document.documentElement.style.setProperty("--color", "#000");
    document.documentElement.style.setProperty("--border", "#372865");
    document.documentElement.style.setProperty("--card-add", "#9dc3e8");
    document.documentElement.style.setProperty(
      "--slide-header",
      "linear-gradient(to right,#00ff9b,#5f84fb)"
    );
    document.documentElement.style.setProperty("--slide-content", "#fff");
  };

  const dark = () => {
    document.documentElement.style.setProperty("--header", "#2b244d");
    document.documentElement.style.setProperty(
      "--content",
      "linear-gradient(to bottom,#372865,#000)"
    );
    document.documentElement.style.setProperty(
      "--card",
      "linear-gradient(to bottom,#372865,#000)"
    );
    document.documentElement.style.setProperty(
      "--city",
      "linear-gradient(#fc7db8,#495cfc)"
    );
    document.documentElement.style.setProperty(
      "--city-overlay",
      "linear-gradient(to bottom,#ff8b8b,#6676ff)"
    );
    document.documentElement.style.setProperty("--color", "#fff");
    document.documentElement.style.setProperty("--border", "#5fa8fc");
    document.documentElement.style.setProperty("--card-add", "#5c8ac1");
    document.documentElement.style.setProperty(
      "--slide-header",
      "linear-gradient(to top,#30cfd0 0,#330867 100%)"
    );
    document.documentElement.style.setProperty("--slide-content", "#2b244d");
  };

  const changeMode = () => {
    !checkRef.current.checked ? light() : dark();
  };

  return (
    <div className={styles.mode__container}>
      <span>{t("light")}</span>
      <label className={styles.mode__switch} htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          ref={checkRef}
          onChange={changeMode}
        />
        <div
          className={classnames(styles.mode__slider, styles.mode__round)}
        ></div>
      </label>
      <span>{t("dark")}</span>
    </div>
  );
}

export default withTranslation()(Mode);
