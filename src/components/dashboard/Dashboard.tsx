import Body from "./body";
import IncomeExpenseCard from "../finances/IncomeExpenseCard";
import CalendarCard from "../calendar/CalendarCard";
import ProjectCard from "../projects/ProjectCard";
import TaskCard from "../tasks/TaskCard";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  return (
    <Body title="Dashboard">
      <div className="h-full grid grid-rows-2 grid-cols-3 gap-8">
        <TaskCard />
        <ProjectCard />
        <IncomeExpenseCard />
        <CalendarCard />
      </div>
    </Body>
  );
};

export default Dashboard;