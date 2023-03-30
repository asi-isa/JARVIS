import { useState } from "react";

import DashboardBody from "../dashboard/body";
import IncomeExpenseCard from "./IncomeExpenseCard";
import FinanceList from "./FinanceList";
import AddFinanceForm from "./AddFinanceForm";
import FinanceListHeader from "./FinanceListHeader";

interface FinanceDashboardProps {
  isVisible: boolean;
}

const FinanceDashboard = ({ isVisible }: FinanceDashboardProps) => {
  const [showAddFinanceForm, setShowAddFinanceForm] = useState(false);

  return (
    <DashboardBody title="Finances" isVisible={isVisible}>
      <div className="flex flex-col gap-10 pb-5">
        <div className="h-full grid grid-rows-2 grid-cols-3 gap-8">
          <IncomeExpenseCard onClick={() => console.log("open edit mode")} />
        </div>

        <div className="flex flex-col gap-8">
          <FinanceListHeader
            onAddFinanceFormBtn={() => setShowAddFinanceForm(true)}
          />
          <FinanceList />
        </div>

        <AddFinanceForm
          show={showAddFinanceForm}
          onClose={() => setShowAddFinanceForm(false)}
        />
      </div>
    </DashboardBody>
  );
};

export default FinanceDashboard;
