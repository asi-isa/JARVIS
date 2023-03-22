import Month from "./Month";

interface CalenderProps {}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export type MonthName = typeof MONTHS[number];

export function monthToNumber(month: MonthName) {
  return MONTHS.indexOf(month);
}

export const YEAR = new Date().getFullYear();

const Calender = ({}: CalenderProps) => {
  return (
    <div className="flex p-3">
      {MONTHS.map((month) => {
        return <Month key={month} month={month} />;
      })}
    </div>
  );
};

export default Calender;
