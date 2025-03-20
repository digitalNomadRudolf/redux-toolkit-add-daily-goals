interface GoalProps {
  id: number;
  name: string;
  isDone: boolean;
}

const Goal = ({ name }: GoalProps) => {
  return (
    <div className="goal p-6 border-2 text-xl rounded m-2 bg-white text-blue-500">
      {name}
    </div>
  );
};

export default Goal;
