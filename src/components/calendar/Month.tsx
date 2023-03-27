import { eachDayOfInterval, lastDayOfMonth } from "date-fns";
import { MonthName, monthToNumber, YEAR } from "../../lib/date";
import Day from "./Day";

interface MonthProps {
  month: MonthName;
}

const Month = ({ month }: MonthProps) => {
  const firstDay = new Date(YEAR, monthToNumber(month), 1);

  const lastDay = lastDayOfMonth(firstDay);

  const daysInMonth = eachDayOfInterval({ start: firstDay, end: lastDay });

  return (
    <div className="flex flex-col grow basis-full border border-[var(--color)]/70">
      <p className="font-bold text-center border-b border-[var(--color)]/50">
        {month}
      </p>

      <div className="flex flex-col">
        {daysInMonth.map((date, i) => {
          return (
            <div className="border-b border-[var(--color)]/50" key={i}>
              <Day date={date} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
