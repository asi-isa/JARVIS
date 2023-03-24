import Menu from "./menu";

import { AiOutlineSearch } from "react-icons/ai";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  return (
    <div className="flex bg-[var(--bg)] h-full w-full rounded-3xl px-6 py-10 ">
      <Menu />

      {/* MAIN */}
      <div className="flex flex-col gap-4 w-full px-8">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          {/* TITLE */}
          <p className="text-2xl text-[var(--white)]">Dashboard</p>

          <div className="flex items-center gap-2">
            <AiOutlineSearch className="text-[var(--white)] text-xl" />
            <p className="text-sm">Search Something...</p>
          </div>

          <p className="font-semibold  text-[var(--black)] bg-[var(--accent)] py-2 px-4 rounded-xl">
            Upgrade
          </p>
        </div>

        {/* BODY */}
        <div className="h-full">
          <p>flex grid, two rows three cols</p>
          {/* <Card row={1} col={1} rowSpan={1} colSpan={1} /> */}
          {/* <Card row={1} col={2} rowSpan={2} colSpan={1} /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
