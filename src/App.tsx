import { useEffect } from "react";
import { fetchWeather } from "./features/weather/weatherSlice";
import { useDispatch } from "react-redux";
import AddGoal from "./components/AddGoal";
import type { AppDispatch } from "./store";
import RandomBackgroundContainer from "./components/RandomBackgroundContainer";
import RandomQuote from "./components/RandomQuote";
import WeatherDisplay from "./components/WeatherDisplay";
import GoalList from "./features/goals/GoalList";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <>
      <RandomBackgroundContainer />
      <div className="header">
        <WeatherDisplay />
      </div>
      <div className="portfolio-page flex flex-col align-center w-[85%] mx-auto gap-y-8">
        <RandomQuote />
        <AddGoal />
        <GoalList />
      </div>
    </>
  );
}
