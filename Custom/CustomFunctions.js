import clear from "../public/img/clear.png";
import cloud from "../public/img/cloud.png";
import mist from "../public/img/mist.png";
import rain from "../public/img/rain.png";
import snow from "../public/img/snow.png";
import thunder from "../public/img/thunder.png";

const myLoader = (data) => {
  switch (data) {
    case "Clear":
      return clear;

    case "Rain":
      return rain;

    case "Snow":
      return snow;

    case "Clouds":
      return cloud;

    case "Mist":
      return mist;

    case "Thunderstorm":
      return thunder;

    default:
      return mist;
  }
};

export { myLoader };
