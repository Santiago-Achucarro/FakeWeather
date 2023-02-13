import { myLoader } from "@/Custom/CustomFunctions";
import { BsFillCloudSlashFill } from "react-icons/bs";
import { RiCelsiusFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import Image from "next/image";

const DataCountry = ({ isSearch, isEmpty, styles }) => {
  return (
    <div
      className={styles.divSearchData}
      style={isSearch[0].find && !isEmpty ? {} : { display: "none" }}
    >
      <div className={styles.divName}>
        <p>{isSearch[1].data?.name}</p>
      </div>
      <div className={styles.divTemp}>
        <p>{isSearch[0].find && Math.round(isSearch[1].data.main?.temp)}</p>
        {isSearch[0].find && <RiCelsiusFill />}
      </div>
      {isSearch[0].find ? (
        <Image
          src={myLoader(isSearch[1].data.weather[0].main)}
          alt={isSearch[1].data.weather[0].description}
          width="100"
          height="100"
        />
      ) : (
        <BsFillCloudSlashFill fontSize={220} color="black" />
      )}
      <div className={styles.divWeather}>
        <div className={styles.divThermal}>
          <p>
            {isSearch[0].find &&
              `Thermal Sensation
        ${Math.round(isSearch[1].data.main?.feels_like)}`}
          </p>
          {isSearch[0].find && <RiCelsiusFill />}
        </div>

        <div className={styles.divHumidity}>
          <WiHumidity />
          <p>
            {isSearch[0].find &&
              `Humidity ${isSearch[1].data.main?.humidity} %`}
          </p>
        </div>
      </div>
    </div>
  );
};

export { DataCountry };
