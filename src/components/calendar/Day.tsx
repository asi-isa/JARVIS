import { getWeek, isWeekend } from "date-fns";
import { format } from "../../lib/date";

import { leadingZero } from "../../lib/num";

interface DayProps {
  date: Date;
}

const Day = ({ date }: DayProps) => {
  const day = leadingZero(date.getDate());
  const dayName = format(date, {
    weekday: "short",
  }).slice(0, 2);

  const isWE = isWeekend(date);
  const isStartOfWeek = date.getDay() === 1;
  const weekNumber = `WN ${leadingZero(getWeek(date))}`;

  return (
    <div className={`flex flex-col p-1 shrink ${isWE && "bg-red-200"}`}>
      <p
        className={`self-end text-[.55rem] leading-[.3rem] ${
          !isStartOfWeek && "invisible"
        }`}
      >
        {weekNumber}
      </p>

      <p className={`text-xs leading-3 ${isWE && "font-bold"}`}>
        {day} {dayName}
      </p>
    </div>
  );
};

export default Day;
