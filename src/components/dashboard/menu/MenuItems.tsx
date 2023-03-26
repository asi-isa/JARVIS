import LogoBtn from "../../LogoBtn";
import { MdDashboard } from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";
import { FaTasks, FaRegCalendarAlt, FaChartPie } from "react-icons/fa";
import { GoSettings } from "react-icons/go";

interface MenuItemsProps {}

const MenuItems = ({}: MenuItemsProps) => {
  return (
    <div className="flex flex-col gap-3">
      <LogoBtn
        Logo={<MdDashboard />}
        title="Dashboard"
        isActive={true}
        onClick={() => console.log("show dashboard")}
      />
      <LogoBtn
        Logo={<RiOrganizationChart />}
        title="Projects"
        isActive={false}
        onClick={() => console.log("show projects")}
      />
      <LogoBtn
        Logo={<FaTasks />}
        title="Tasks"
        isActive={false}
        onClick={() => console.log("show tasks")}
      />
      <LogoBtn
        Logo={<FaRegCalendarAlt />}
        title="Calendar"
        isActive={false}
        onClick={() => console.log("show Calendar")}
      />
      <LogoBtn
        Logo={<FaChartPie />}
        title="Finances"
        isActive={false}
        onClick={() => console.log("show finances")}
      />
      <LogoBtn
        Logo={<GoSettings />}
        title="Settings"
        isActive={false}
        onClick={() => console.log("show settings")}
      />
    </div>
  );
};

export default MenuItems;
