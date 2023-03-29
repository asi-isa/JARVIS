import { isEqual as dfIsEqual, startOfDay } from "date-fns";
import { leadingZero } from "../num";

export function extractDayMonthYear(date: Date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return { day, month, year };
}

// TODO options
export function dateToStr(date: Date) {
  const { day: dayNum, year } = extractDayMonthYear(date);

  const day = leadingZero(dayNum);

  const month = format(date, { month: "short" });

  return `${day} ${month} ${year}`;
}

export function format(date: Date, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const YEAR = new Date().getFullYear();

export const MONTHS = [
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

export function monthNumberToName(monthNumber: number) {
  return MONTHS[monthNumber];
}

export function isEqual(date1: Date, date2: Date) {
  return dfIsEqual(startOfDay(date1), startOfDay(date2));
}
