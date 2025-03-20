import weatherData from "../data/weather.json";

const WeatherDisplay = () => {
  const temperature = weatherData[3].temperature.fahrenheit;
  const weatherDescription = weatherData[3].description;

  return (
    <div className="flex relative z-10 text-xl text-white items-center justify-end px-10">
      {/* weather icon */}
      <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rainy icon" />
      {/* flex flex col with the temperature & temperature description */}
      <div className="flex flex-col">
        <div className="temperature">{temperature} °</div>
        <div className="description uppercase text-base">
          {weatherDescription}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
