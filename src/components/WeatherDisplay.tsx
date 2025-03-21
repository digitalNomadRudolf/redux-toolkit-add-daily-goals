import { useSelector } from "react-redux";
import { RootState } from "../store";

const WeatherDisplay = () => {
  const weather = useSelector((state: RootState) => state.weather);
  const { temperature, description, icon, error, isLoading } = weather;

  if (isLoading) {
    return <div>Loading weather...</div>;
  }

  if (error) {
    return <div>Couldn't load weather...</div>;
  }

  return (
    <div className="flex relative z-10 text-xl text-white items-center justify-end px-10 py-5">
      <img src={icon} alt={description} />
      <div className="flex flex-col">
        <div className="temperature">{temperature} °</div>
        <div className="description uppercase text-base">{description}</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
