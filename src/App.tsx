import RandomBackgroundContainer from "./components/RandomBackgroundContainer";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <div className="portfolio-page">
      <WeatherDisplay />
      <RandomBackgroundContainer />
      {/* <RandomQuote /> */}
      {/* <AddGoal /> */}
      {/* <GoalList />  */}
    </div>
  );
}

export default App;
