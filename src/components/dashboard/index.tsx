import Brand from "../Brand";
import Divider from "../Divider";
import MenuItems from "./menu/MenuItems";
import ThemeToggle from "../ThemeToggle";
import Menu from "./menu";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  return (
    <div className="flex bg-[var(--bg)] h-full w-full rounded-3xl px-6 py-10 ">
      <Menu />

      {/* MAIN */}
      <div></div>
    </div>
  );
};

export default Dashboard;
