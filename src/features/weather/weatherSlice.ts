import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Lisbon`
    );
    const data = await response.json();
    return data.current;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: 0,
    description: "",
    icon: "",
    isLoading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        // set the temperature to the correct fetched temp
        state.temperature = action.payload.temp_f;
        state.description = action.payload.condition.text;
        state.icon = action.payload.condition.icon;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch weather";
      });
  },
});

export default weatherSlice.reducer;
