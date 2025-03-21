import { useDispatch } from "react-redux";
import { removeGoal, toggleDone } from "./goalsSlice";

interface GoalProps {
  id: string;
  name: string;
  isDone: boolean;
}

const Goal = ({ id, name, isDone }: GoalProps) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`goal relative group p-6 border-2 text-xl rounded m-2 bg-white text-blue-500 ${
        isDone ? "opacity-10" : "opacity-100"
      }`}
    >
      {name}
      <div className="absolute -top-5 -right-10 flex text-xs gap-2 z-100">
        <button
          className="opacity-0 group-hover:opacity-100 !bg-blue-500 hover:!bg-blue-200 text-white"
          onClick={() => dispatch(removeGoal(id))}
        >
          Remove
        </button>
        <button
          className="opacity-0 group-hover:opacity-100 !bg-blue-100"
          onClick={() => dispatch(toggleDone(id))}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Goal;
