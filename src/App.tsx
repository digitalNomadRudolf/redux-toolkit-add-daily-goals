import AddGoal from "./components/AddGoal";
import RandomBackgroundContainer from "./components/RandomBackgroundContainer";
import RandomQuote from "./components/RandomQuote";
import WeatherDisplay from "./components/WeatherDisplay";
import GoalList from "./features/goals/GoalList";

function App() {
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

export default App;
