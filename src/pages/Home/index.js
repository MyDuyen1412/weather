import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDataWeather } from "../../utils/api";
import Card from "../../Component/Card";
import AddCity from '../../Component/AddCity';
import styles from "./style.module.css";

function Home() {
  const [weathers, setWeathers] = useState([]);
  useEffect(() => {
    getDataWeather().then(res => setWeathers(res));
  }, []);
  
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        {weathers.length > 0  && weathers.sort((a, b) => a.name.localeCompare(b.name)).map((weather,index) => (
          <Link
            to={{
              pathname: `/detail/${weather.name}`,
              state: weather
            }}
            key={index}
          >
            <Card
              title={weather.name}
              temp={weather.main.temp}
              description={weather.weather[0].main}
              min={weather.main.temp_min}
              max={weather.main.temp_max}
            />
          </Link>
        ))}
        <AddCity/>
      </div>
    </div>
  );
}

export default Home;
