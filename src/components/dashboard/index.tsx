import Menu from "./menu";

import DashboardBody from "./Dashboard";
import FinanceDashboard from "../finances/FinanceDashboard";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  return (
    <div className="flex bg-[var(--bg)] h-full w-full rounded-3xl px-6 py-10 ">
      <Menu />

      {/* <DashboardBody /> */}
      <FinanceDashboard />
    </div>
  );
};

export default Dashboard;
