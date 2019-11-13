import classnames from "classnames";
import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import styles from "./style.module.css";

function HambugerMenu({ t, show, click }) {
  const [open, setOpen] = useState(show);

  useEffect(() => {
    setOpen(show);
  }, [show])

  const openOverlay = () => {
    click(!open);
  };

  return (
    <>
      <button
        className={classnames(styles.menuBtn, {[styles.open] : open})}
        onClick={openOverlay}
      >
        <span className={classnames(styles['menuBtn__line'], styles['menuBtn__line-top'])}></span>
        <span className={classnames(styles['menuBtn__line'], styles['menuBtn__line-middle'])}></span>
        <span className={classnames(styles['menuBtn__line'], styles['menuBtn__line-bottom'])}></span>
      </button>
    </>
  );
}

export default withTranslation()(HambugerMenu);
