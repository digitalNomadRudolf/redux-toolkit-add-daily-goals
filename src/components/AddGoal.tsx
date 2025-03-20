import { KeyboardEventHandler, useState } from "react";

const AddGoal = () => {
  const [goal, setGoal] = useState({});

  const handleSubmit: KeyboardEventHandler = (event) => {
    const value = (event.currentTarget as HTMLInputElement).value;
    if (!value) return;

    if (event.key === "Enter") {
      alert(`Goal will be added with value: ${value}`);
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
      />
    </div>
  );
};

export default AddGoal;
