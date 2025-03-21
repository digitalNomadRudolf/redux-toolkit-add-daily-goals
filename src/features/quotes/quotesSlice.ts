import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomQuote = createAsyncThunk(
  "randomQuote/fetchRandomQuote",
  async () => {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) {
      throw new Error("Failed to fetch the quote");
    }

    const data = await response.json();
    return data;
  }
);

const fetchRandomQuoteSlice = createSlice({
  name: "randomQuote",
  initialState: {
    id: 0,
    quote: "",
    author: "",
    isLoading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.id = action.payload.id;
        state.author = action.payload.author;
        state.quote = action.payload.quote;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch quote";
      });
  },
});

export default fetchRandomQuoteSlice.reducer;
