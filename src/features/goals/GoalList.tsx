import { useSelector } from "react-redux";
import Goal from "./Goal";
import { RootState } from "../../store";

const GoalList = () => {
  const { goals } = useSelector((state: RootState) => state.goals);
  return (
    <div className="goals-list relative text-white flex flex-wrap justify-center p-6 mx-auto border-white border-2 w-full bg-white/25">
      {goals.map((goal) => (
        <Goal key={goal.id} {...goal} />
      ))}
    </div>
  );
};

export default GoalList;
