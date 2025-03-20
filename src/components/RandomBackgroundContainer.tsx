import { useState } from "react";
import backgroundData from "../data/backgrounds.json";
import RandomBackground from "./RandomBackground";
// Render RandomBackground component and handle logic
const RandomBackgroundContainer = () => {
  const [backgrounds] = useState(backgroundData.backgrounds);
  // randomly set the background
  const randNumber = Math.floor(Math.random() * backgrounds.length);
  const [currentBackground, setCurrentBackground] = useState(
    backgrounds[randNumber]
  );

  // control previous and next backround
  const handleNextBg = () => {
    setCurrentBackground((prev) => {
      const currentIndex = backgrounds.indexOf(prev);
      const nextIndex =
        currentIndex === backgrounds.length - 1 ? 0 : currentIndex + 1;
      return backgrounds[nextIndex];
    });
  };

  const handlePrevBg = () => {
    setCurrentBackground((prev) => {
      const currentIndex = backgrounds.indexOf(prev);
      const prevIndex =
        currentIndex === 0 ? backgrounds.length - 1 : currentIndex - 1;
      return backgrounds[prevIndex];
    });
  };

  return (
    <>
      <RandomBackground background={currentBackground} />
      <div className="arrows flex justify-between mx-5 items-center relative h-full">
        <button className="h-fit" onClick={handlePrevBg}>
          {"<"}
        </button>
        <button className="h-fit" onClick={handleNextBg}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default RandomBackgroundContainer;
