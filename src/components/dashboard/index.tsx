import { FaConnectdevelop } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { HiPresentationChartLine } from "react-icons/hi";
import { RiOrganizationChart } from "react-icons/ri";
import { FaTasks, FaRegCalendarAlt } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { ImSun } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";

import LogoBtn from "../LogoBtn";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  return (
    <div className="flex bg-[var(--bg)] h-full w-full rounded-3xl px-6 py-10 ">
      {/* MENU */}
      <div className="w-fit flex flex-col items-center gap-6 mx-3">
        {/* BRAND */}
        <div className="flex items-center gap-2">
          <FaConnectdevelop className="text-[var(--accent)] text-2xl" />
          <p className="text-xl text-[var(--white)]">JARVIS</p>
        </div>
        {/* DIVIDER HORIZONTAL */}
        <div className="w-full h-[1px] bg-[var(--white-muted)] opacity-40" />

        {/* MENU_ITEMS */}
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
            Logo={<GoSettings />}
            title="Settings"
            isActive={false}
            onClick={() => console.log("show settings")}
          />
        </div>

        {/* THEME TOGGLE */}
        <div className="flex gap-2 items-center mt-auto">
          <p className="text-sm">Light</p>
          <div className="flex justify-end items-center gap-3 border border-[var(--white-muted)] px-[2px] py-[4px] rounded-3xl relative">
            <div className="absolute h-[85%] aspect-square bg-[var(--accent)] rounded-full" />
            <ImSun className="ml-[4px] text-[var(--white)]" />
            <BsFillMoonStarsFill className="mr-[4px] text-[var(--white)]" />
          </div>
          <p className="text-sm text-[var(--white)]">Dark</p>
        </div>
      </div>

      {/* MAIN */}
      <div></div>
    </div>
  );
};

export default Dashboard;
