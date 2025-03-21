import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Goal {
  id: number;
  name: string;
  isDone: boolean;
}

interface GoalsState {
  goals: Goal[];
}

const initialState: GoalsState = {
  goals: [],
};

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action: PayloadAction<Goal>) => {
      state.goals.push(action.payload);
    },
    removeGoal: (state, action: PayloadAction<number>) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },
    toggleDone: (state, action: PayloadAction<number>) => {
      // find the goal with certain id and toggle that isDone
      const goal = state.goals.find((goal) => goal.id === action.payload);
      if (goal) {
        goal.isDone = !goal.isDone;
      }
    },
  },
});

export const { addGoal, removeGoal, toggleDone } = goalsSlice.actions;
export default goalsSlice.reducer;
