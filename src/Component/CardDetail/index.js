import React, { useEffect, useState } from "react";
import { getForecast } from "../../utils/api";
import { withTranslation } from 'react-i18next';
import Forecast from '../Forecast';
import styles from "./style.module.css";

function CardDetail({ place, temp, description, humidity, wind, t }) {
  const [forecast, setForecast] = useState();
  useEffect(() => {
    getForecast(place).then(res => {
      calcForecast(res.list);
    });
  }, [place]);
  const calcForecast = data => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const forecast = data.reduce((arr, item )=> {
        const date = new Date(item.dt_txt).getDay();
        if(!arr[days[date]]) {
            arr[days[date]] = {date: days[date], item: item}
            return arr;
        }
        else {
            if(item.main.temp > arr[days[date]].item.main.temp){
                arr[days[date]].item = item
            }
        }
        return arr;
    }, {})
    
    setForecast(Object.keys(forecast).map(index => forecast[index]));
  };
  if (!forecast) return "Loading ...";
  return (
    <div className={styles.cardDetail}>
      <div className={styles.cardDetail__top}>
        <div className={styles.cardDetail__info}>
          <div className={styles["cardDetail__info-temp"]}>
            <span>{Math.floor(temp - 273.15)}°</span>
            <span>{description}</span>
          </div>
          <div className={styles["cardDetail__info-more"]}>
            <div className={styles["cardDetail__info-more__humidity"]}>
              <span>{t('humidity')}</span>
              <span>{humidity}%</span>
            </div>
            <div className={styles["cardDetail__info-more__wind"]}>
              <span>{t('wind')}</span>
              <span>{wind}K/M</span>
            </div>
          </div>
        </div>
        <div className={styles.cardDetail__place}>
          <span>{place}</span>
        </div>
      </div>
      <div className={styles.cardDetail__bottom}>
        {forecast.map(item => (
            <Forecast date={item.date} temp={item.item.main.temp} type={item.item.weather[0].main}/>
        ))}
      </div>
    </div>
  );
}

export default withTranslation()(CardDetail);
