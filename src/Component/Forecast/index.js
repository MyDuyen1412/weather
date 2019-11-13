import React from 'react';
import Image from '../Image';
import styles from './style.module.css';

function Forecast({date, temp, type}) {
  return (
    <div className={styles.forecast}>
        <span className={styles.forecast__date}>{date}</span>
        <Image className={styles.forecast__img} type={type}/>
        <span className={styles.forecast__temp}>{Math.floor(temp - 273.15)}°</span>
        <span className={styles.forecast__type}>{type}</span>
    </div>
  );
}

export default Forecast;
