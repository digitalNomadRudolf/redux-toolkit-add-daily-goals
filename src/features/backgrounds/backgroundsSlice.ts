import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BackgroundType } from "../../components/RandomBackground";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchBackgrounds = createAsyncThunk(
  "backgrounds/fetchBackgrounds",
  async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=nature&count=5`
    );
    const data = await response.json();
    return data;
  }
);

const backgroundSlice = createSlice({
  name: "backgrounds",
  initialState: {
    backgrounds: [] as BackgroundType[],
    currentBackgroundIndex: 0,
    isLoading: false,
    error: null as string | null,
  },
  reducers: {
    setCurrentBackgroundIndex: (state, action) => {
      state.currentBackgroundIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackgrounds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBackgrounds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.backgrounds = action.payload;
        state.currentBackgroundIndex = 0;
      })
      .addCase(fetchBackgrounds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch background";
      });
  },
});

export const { setCurrentBackgroundIndex } = backgroundSlice.actions;
export default backgroundSlice.reducer;
