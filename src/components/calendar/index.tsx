import { MONTHS } from "../../lib/date";

import Month from "./Month";

interface CalenderProps {}

const Calender = ({}: CalenderProps) => {
  return (
    <div className="flex w-full p-3">
      {MONTHS.map((month) => {
        return <Month key={month} month={month} />;
      })}
    </div>
  );
};

export default Calender;
