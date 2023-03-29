import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  subMonths,
} from "date-fns";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import { format, isEqual } from "../../lib/date";

interface DatePickerProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const DatePicker = ({ selectedDate, onChange }: DatePickerProps) => {
  const [visibleMonth, setVisibleMonth] = useState(startOfMonth(selectedDate));

  const datesInMonth = eachDayOfInterval({
    start: visibleMonth,
    end: endOfMonth(visibleMonth),
  });

  const offset = Array.from({ length: visibleMonth.getDay() });
  // like datesInMonth but with offsets
  // to properly display the start day of month
  const DATES_IN_MONTH = [...offset, ...datesInMonth] as (undefined | Date)[];

  function nextMonth() {
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, 1);
    });
  }
  function previousMonth() {
    setVisibleMonth((currentMonth) => {
      return subMonths(currentMonth, 1);
    });
  }

  return (
    <div className="flex flex-col gap-6 bg-[var(--bg)] px-4 py-6 rounded-md border border-[var(--black-muted)] shadow-2xl">
      <div className="flex justify-between text-[var(--white)] ">
        <HiOutlineChevronLeft
          className="text-lg cursor-pointer"
          onClick={previousMonth}
        />

        <p className="text-xl font-medium">
          {format(visibleMonth, { year: "numeric", month: "long" })}
        </p>

        <HiOutlineChevronRight
          className="text-lg cursor-pointer"
          onClick={nextMonth}
        />
      </div>

      <div className="grid grid-cols-7 gap-1">
        {WEEKDAYS.map((weekday) => {
          return (
            <p className="text-center text-sm" key={weekday}>
              {weekday}
            </p>
          );
        })}

        {DATES_IN_MONTH.map((date, i) => {
          if (!date) {
            return <p key={i}></p>;
          }

          const isSelectedDate = isEqual(date, selectedDate);

          return (
            <p
              className={`text-center flex items-center justify-center text-white w-10 aspect-square hover:bg-[var(--bg-muted)] rounded-md cursor-pointer border  ${
                isSelectedDate
                  ? "bg-[var(--bg-muted)] border-[var(--white-muted)]"
                  : "border-transparent"
              }`}
              onClick={() => onChange(date)}
              key={i}
            >
              {date.getDate()}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default DatePicker;
