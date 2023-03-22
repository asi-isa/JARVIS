import { getWeek, isWeekend } from "date-fns";

interface DayProps {
  date: Date;
}

function leadingZero(num: number) {
  return num < 10 ? `0${num}` : `${num}`;
}

const Day = ({ date }: DayProps) => {
  const day = leadingZero(date.getDate());
  const dayName = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  })
    .format(date)
    .slice(0, 2);

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
