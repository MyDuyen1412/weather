import axios from "axios";
import { getCities } from "./datasources";

export const getDataWeather = async () => {
  const cities = getCities();
  let arr= []
  for (let i = 0; i < cities.length; i++) {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=15dc6fdf9eea958b8eed44aea76da029`
    );
    arr.push(res.data)
  }
  return arr;
};

export const getWeatherDetail = async name => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=15dc6fdf9eea958b8eed44aea76da029`
  );
  return res.data;
};

export const getForecast = async name => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=15dc6fdf9eea958b8eed44aea76da029`
  );
  return res.data;
};
