import { MdDashboard } from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";
import { FaTasks, FaRegCalendarAlt, FaChartPie } from "react-icons/fa";
import { GoSettings } from "react-icons/go";

import { useDashboardCtx } from "../../../ctx/DashboardCtx";

import LogoBtn from "../../LogoBtn";

interface MenuItemsProps {}

const MenuItems = ({}: MenuItemsProps) => {
  const { selectedDashboard, setSelectedDashboard } = useDashboardCtx();

  return (
    <div className="flex flex-col gap-3">
      <LogoBtn
        Logo={<MdDashboard />}
        title="Dashboard"
        isActive={selectedDashboard === "dashboard"}
        onClick={() => setSelectedDashboard("dashboard")}
      />
      <LogoBtn
        Logo={<RiOrganizationChart />}
        title="Projects"
        isActive={selectedDashboard === "projects"}
        onClick={() => setSelectedDashboard("projects")}
      />
      <LogoBtn
        Logo={<FaTasks />}
        title="Tasks"
        isActive={selectedDashboard === "tasks"}
        onClick={() => setSelectedDashboard("tasks")}
      />
      <LogoBtn
        Logo={<FaRegCalendarAlt />}
        title="Calendar"
        isActive={selectedDashboard === "calendar"}
        onClick={() => setSelectedDashboard("calendar")}
      />
      <LogoBtn
        Logo={<FaChartPie />}
        title="Finances"
        isActive={selectedDashboard === "finances"}
        onClick={() => setSelectedDashboard("finances")}
      />
      <LogoBtn
        Logo={<GoSettings />}
        title="Settings"
        isActive={selectedDashboard === "settings"}
        onClick={() => setSelectedDashboard("settings")}
      />
    </div>
  );
};

export default MenuItems;
