import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import Alert from "../../Component/Alert";
import Card from "../../Component/Card";
import CityOfMonth from "../../Component/CityOfMonth";
import Select from "../../Component/Select";
import { getWeatherDetail } from "../../utils/api";
import { getCities } from "../../utils/datasources";
import styles from "./style.module.css";

const options = [
  { label: "Bangkok", value: "Bang Kok" },
  { label: "Roma", value: "Roma" },
  { label: "Paris", value: "Paris" },
  { label: "Tokyo", value: "Tokyo" },
  { label: "Beijing", value: "Beijing" },
  { label: "London", value: "Lon Don" },
  { label: "Singapore", value: "Singapore" },
  { label: "Chicago", value: "Chicago" },
  { label: "Brussels", value: "Brussels" },
  { label: "Madrid", value: "Madrid" },
  { label: "Moscow", value: "Moscow" },
  { label: "Sydney", value: "Sydney" },
  { label: "Hanoi", value: "Ha Noi" },
  { label: "Seoul", value: "Seoul" },
  { label: "Johannesburg", value: "Johannesburg" },
  { label: "Murmansk", value: "Murmansk" },
  { label: "Danang", value: "Da Nang" },
  { label: "Abuja", value: "Abuja"}
];

function Add({ t }) {
  const [selectedOption, setSelect] = useState("");
  const [weatherOfMonth, setWeatherOfMonth] = useState();
  const [weather, setWeather] = useState();
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    getWeatherDetail("Rome").then(res => setWeatherOfMonth(res));
  }, []);
  const handleChange = selectedOption => {
    setSelect(selectedOption);
    getWeatherDetail(selectedOption).then(res => {
      setWeather(res);
      setShow(true);
    });
  };
  const handleAddCity = () => {
    let citiesNew = [];
    const cities = getCities();
    !cities.includes(weather.name)
      ? (citiesNew = [...cities, weather.name])
      : (citiesNew = [...cities]);
    localStorage.setItem("cities", JSON.stringify(citiesNew));
    setShow(false);
    setSelect("");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  if (!weatherOfMonth) return "Loading...";
  return (
    <div className={styles.add}>
      <div className={styles.add__left}>
        <h3 className={styles.add__left__title}>{t("search-cities")}</h3>
        <Select
          value={selectedOption}
          title={t("select-city")}
          onChange={selectedOption => handleChange(selectedOption)}
          options={options.sort((a, b) => a.label.localeCompare(b.label))}
        />
        <div
          className={classnames(styles.add__left__weather, {
            [styles.add__left__visible]: show
          })}
        >
          {weather && (
            <div className={styles.add__left__weather__card}>
              <Card
                title={weather.name}
                temp={weather.main.temp}
                description={weather.weather[0].main}
                min={weather.main.temp_min}
                max={weather.main.temp_max}
                classname={styles.add__left__weather__card__card}
              />
              <button
                onClick={handleAddCity}
                className={styles.add__left__weather__card__btn}
              >
                {t("add-city")} +
              </button>
            </div>
          )}
        </div>
        {alert && <Alert />}
      </div>
      <div className={styles.add__right}>
        <CityOfMonth
          description={weatherOfMonth.weather[0].main}
          temp={weatherOfMonth.main.temp}
          name={weatherOfMonth.name}
        />
      </div>
    </div>
  );
}

export default withTranslation()(Add);
