import DashboardBody from "../dashboard/body";
import IncomeExpenseCard from "./IncomeExpenseCard";

interface FinanceDashboardProps {
  isVisible: boolean;
}

const FinanceDashboard = ({ isVisible }: FinanceDashboardProps) => {
  return (
    <DashboardBody title="Finances" isVisible={isVisible}>
      <div className="h-full grid grid-rows-2 grid-cols-3 gap-8">
        <IncomeExpenseCard onClick={() => console.log("open edit mode")} />
      </div>
    </DashboardBody>
  );
};

export default FinanceDashboard;
