import Body from "./body";
import IncomeExpenseCard from "../finances/IncomeExpenseCard";
import CalendarCard from "../calendar/CalendarCard";
import ProjectCard from "../projects/ProjectCard";
import TaskCard from "../tasks/TaskCard";

interface DashboardBodyProps {
  isVisible: boolean;
}

const DashboardBody = ({ isVisible }: DashboardBodyProps) => {
  return (
    <Body title="DashboardBody" isVisible={isVisible}>
      <div className="h-full grid grid-rows-2 grid-cols-3 gap-8">
        <TaskCard />
        <ProjectCard />
        <IncomeExpenseCard onClick={() => console.log("show finances")} />
        <CalendarCard />
      </div>
    </Body>
  );
};

export default DashboardBody;
