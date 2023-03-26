import Card from "../dashboard/card";
import Circle from "../svgs/Circle";

interface IncomeExpenseCardProps {
  onClick?: () => void;
}

const IncomeExpenseCard = ({ onClick }: IncomeExpenseCardProps) => {
  return (
    <Card onClick={onClick ?? undefined}>
      <div className="bg-[var(--accent)] h-full p-6 flex flex-col justify-between text-[var(--black)]">
        <p className=" font-medium text-lg">Income vs. Expenses</p>

        <div className="relative self-center flex items-center justify-center w-[130px] h-[130px] ">
          {/* PieChart */}
          {/* TODO more generic, rotation, pathlength, 1% =? 3.6deg */}
          <Circle
            className="absolute stroke-[var(--black)] rotate-[182deg] scale-y-[-1]"
            pathLength={0.67}
          />
          <Circle
            className="absolute stroke-[var(--gray)] rotate-[200deg]"
            pathLength={0.23}
          />
          <p className="text-3xl font-medium">33k</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 bg-black rounded" />
              <p>Income</p>
            </div>

            <p>72%</p>
          </div>

          <div className="w-full h-[1px] m-auto bg-[var(--gray)] opacity-30" />

          <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 bg-[var(--gray)] rounded" />
              <p>Expenses</p>
            </div>

            <p>28%</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IncomeExpenseCard;
