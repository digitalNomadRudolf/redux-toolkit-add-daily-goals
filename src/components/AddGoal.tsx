import { KeyboardEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../features/goals/goalsSlice";
import { v4 as uuidv4 } from "uuid";

const AddGoal = () => {
  const dispatch = useDispatch();
  const [goal, setGoal] = useState("");

  const handleSubmit: KeyboardEventHandler = (event) => {
    const value = (event.currentTarget as HTMLInputElement).value;
    if (!value) return;

    if (event.key === "Enter") {
      // create new goal
      const newGoal = {
        id: uuidv4(),
        name: goal,
        isDone: false,
      };
      setGoal("");
      // dispatch addGoal action with the goal
      dispatch(addGoal(newGoal));
    }
  };

  return (
    <div className="add-goal gap-8 relative text-white flex flex-col justify-center p-6 mx-auto border-white border-2 w-full bg-white/25">
      <h1 className="font-bold text-white text-4xl">
        What's on your mind today?
      </h1>
      <input
        className="goal-input text-center text-3xl border-b-2 outline-0"
        type="text"
        onChange={(event) => setGoal(event.currentTarget.value)}
        onKeyDown={(event) => handleSubmit(event)}
        value={goal}
      />
    </div>
  );
};

export default AddGoal;
