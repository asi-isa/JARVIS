import { AiOutlinePlus } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

import DashboardBody from "../dashboard/body";
import IncomeExpenseCard from "./IncomeExpenseCard";
import FinanceListItem from "./FinanceListItem";

interface FinanceDashboardProps {
  isVisible: boolean;
}

const FinanceDashboard = ({ isVisible }: FinanceDashboardProps) => {
  return (
    <DashboardBody title="Finances" isVisible={isVisible}>
      <div className="flex flex-col gap-10 pb-5">
        <div className="h-full grid grid-rows-2 grid-cols-3 gap-8">
          <IncomeExpenseCard onClick={() => console.log("open edit mode")} />
        </div>

        <div className="flex flex-col gap-8">
          {/* Finances header */}
          <div className="flex justify-end">
            <div className="flex items-center gap-3">
              <BsFilterRight className="text-3xl text-[var(--white)]" />

              <div className="flex items-center gap-3 px-4 py-2 rounded-3xl bg-[var(--accent)] text-[var(--black)] ">
                <AiOutlinePlus className="text-2xl text-[var(--black)] " />
                <p className="font-medium">Add Finance</p>
              </div>
            </div>
          </div>

          {/* finances */}
          <div className="flex flex-col gap-3">
            <FinanceListItem
              category={"salary"}
              date={new Date(2022, 9, 5)}
              senderReciever={"FFT"}
              amount={5500}
            />
            <FinanceListItem
              category={"salary"}
              date={new Date(2022, 9, 5)}
              senderReciever={"FFT"}
              amount={-3500}
            />
            <FinanceListItem
              category={"salary"}
              date={new Date(2022, 9, 5)}
              senderReciever={"FFT"}
              amount={5500}
            />
            <FinanceListItem
              category={"salary"}
              date={new Date(2022, 9, 5)}
              senderReciever={"FFT"}
              amount={5500}
            />
          </div>
        </div>
      </div>
    </DashboardBody>
  );
};

export default FinanceDashboard;
