import Menu from "./menu";

import DashboardBody from "./DashboardBody";
import FinanceDashboard from "../finances/FinanceDashboard";

import { useDashboardCtx } from "../../ctx/DashboardCtx";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  const { selectedDashboard } = useDashboardCtx();

  return (
    <div className="flex bg-[var(--bg)] h-full w-full rounded-3xl px-6 py-10 ">
      <Menu />

      <DashboardBody isVisible={selectedDashboard === "dashboard"} />
      <FinanceDashboard isVisible={selectedDashboard === "finances"} />
    </div>
  );
};

export default Dashboard;
