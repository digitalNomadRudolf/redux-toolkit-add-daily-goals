import goalData from "../../data/goals.json";
import Goal from "./Goal";

const GoalList = () => {
  const goals = goalData.goals;
  // return a div that goes through the goals and renders them
  // TODO: Right now the goals are fetched from a json file.
  // TODO: Goals will be added through the addGoal input sending a dispatch to add a goal
  return (
    <div className="goals-list relative text-white flex flex-wrap justify-center p-6 mx-auto border-white border-2 w-full bg-white/25">
      {goals.map((goal) => (
        <Goal key={goal.id} {...goal} />
      ))}
    </div>
  );
};

export default GoalList;
