import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { extractDayMonthYear } from "../../lib/date";
import { leadingZero } from "../../lib/num";
import DatePicker from "../calendar/DatePicker";

interface DateInputProps {}

const DateInput = ({}: DateInputProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { day, month, year } = extractDayMonthYear(selectedDate);

  return (
    <div className="flex flex-col gap-1">
      <p className="font-medium">When</p>
      <p
        className="text-[var(--orange)] text-lg font-medium bg-[var(--bg-muted)] py-[10px] px-[16px] rounded-lg border border-[var(--black-muted)] hover:border-[var(--white-muted)] focus:border-[var(--white-muted)] active:border-[var(--white-muted)] w-fit cursor-pointer"
        onClick={() => setShowDatePicker(!showDatePicker)}
      >
        {leadingZero(day)}
        <span className="text-[var(--white)]">/</span>
        {leadingZero(month)}
        <span className="text-[var(--white)]">/</span>
        {year}
      </p>

      {
        <AnimatePresence>
          {showDatePicker && (
            <motion.div
              initial={{ opacity: 0, y: "-21%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-21%" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 top-[27%] flex justify-center "
            >
              <div className="w-fit h-fit">
                <DatePicker
                  selectedDate={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setShowDatePicker(false);
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      }
    </div>
  );
};

export default DateInput;
