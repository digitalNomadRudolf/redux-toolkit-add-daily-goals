import { useEffect } from "react";
import RandomBackground from "./RandomBackground";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  fetchBackgrounds,
  setCurrentBackgroundIndex,
} from "../features/backgrounds/backgroundsSlice";
// Render RandomBackground component and handle logic
const RandomBackgroundContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { backgrounds, currentBackgroundIndex, isLoading, error } = useSelector(
    (state: RootState) => state.backgrounds
  );

  useEffect(() => {
    dispatch(fetchBackgrounds());
  }, [dispatch]);

  // control previous and next backround
  const handleNextBg = () => {
    dispatch(
      setCurrentBackgroundIndex(
        (currentBackgroundIndex + 1) % backgrounds.length
      )
    );
  };

  const handlePrevBg = () => {
    dispatch(
      setCurrentBackgroundIndex(
        (currentBackgroundIndex - 1 + backgrounds.length) % backgrounds.length
      )
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong while fetching the background</div>;
  }

  const currentBackground = backgrounds[currentBackgroundIndex];

  return (
    <>
      <RandomBackground background={currentBackground} />
      <div className="arrows absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center w-full px-[10px] h-full">
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
