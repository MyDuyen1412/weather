import React from "react";
import clear from "../../asset/clear.png";
import cloudy from "../../asset/cloudy.png";
import drizzle from "../../asset/drizzle.png";
import rain from "../../asset/rain.png";
import foggy from "../../asset/foggy.png";
import snow from "../../asset/snow.png";
import thunderstorm from "../../asset/thunderstorm.png";
import smoke from "../../asset/smoke.svg";

function Image({ className, type }) {
  return (
    <img
      className={className}
      src={
        type === "Drizzle"
          ? drizzle
          : type === "Clouds"
          ? cloudy
          : type === "Clear"
          ? clear
          : type === "Rain"
          ? rain
          : type === "Snow"
          ? snow
          : type === "Fog"
          ? foggy
          : type === "Smoke"
          ? smoke
          : thunderstorm
      }
      alt="icon"
    />
  );
}

export default Image;
