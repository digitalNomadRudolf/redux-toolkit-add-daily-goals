import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./features/goals/goalsSlice";
import weatherReducer from "./features/weather/weatherSlice";
import quoteReducer from "./features/quotes/quotesSlice";
import backgroundReducer from "./features/backgrounds/backgroundsSlice";

const store = configureStore({
  reducer: {
    goals: goalsReducer,
    weather: weatherReducer,
    quote: quoteReducer,
    backgrounds: backgroundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
