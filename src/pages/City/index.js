import React, { useEffect, useState } from "react";
import { getWeatherDetail } from "../../utils/api";
import BtnBack from "../../Component/BtnBack";
import CardDetail from "../../Component/CardDetail";
import styles from "./style.module.css";

function City({ match, location }) {
  const [weather, setWeather] = useState();
  useEffect(() => {
    getWeatherDetail(match.params.city).then(res => setWeather(res));
  }, [match.params.city]);
  
  if (!weather) return "Loading...";

  return (
    <div className={styles.city}>
      <div className={styles.city__overlay}></div>
      <BtnBack />
      <CardDetail
        place={weather.name}
        temp={weather.main.temp}
        description={weather.weather[0].main}
        humidity={weather.main.humidity}
        wind={weather.wind.speed}
      />
    </div>
  );
}

export default City;
