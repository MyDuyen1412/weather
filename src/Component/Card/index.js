import classnames from "classnames";
import React from 'react';
import Image from '../Image';
import styles from './style.module.css';

function Card({title, temp, description, min, max, classname}) {
  return (
    <div className={classnames(styles.card, classname)}>
        <div className={styles.card__title}>
            {title}
        </div>
        <div className={styles.card__icon}>
            <Image type={description}/>   
        </div>
        <div className={styles.card_temp}>
            <span>{Math.floor(temp -273.15)}°</span>
            <span>{description}</span>
        </div>
        <div className={styles['card__min-max']}>
            <div className={styles.card__min}>
                <span>
                    {Math.floor(min - 273.15)}
                </span>
            </div>
            <div className={styles.card__max}>
                <span>
                    {Math.floor(max - 273.15)}
                </span>
            </div>
        </div>
    </div>
  );
}

export default Card;
