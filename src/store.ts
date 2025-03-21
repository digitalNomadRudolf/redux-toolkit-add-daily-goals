import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./features/goals/goalsSlice";
import weatherReducer from "./features/weather/weatherSlice";
import quoteReducer from "./features/quotes/quotesSlice";

const store = configureStore({
  reducer: {
    goals: goalsReducer,
    weather: weatherReducer,
    quote: quoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
