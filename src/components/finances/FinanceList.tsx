import { useFinanceCtx } from "../../ctx/FinanceCtx";

import FinanceListItem from "./FinanceListItem";

interface FinanceListProps {}

const FinanceList = ({}: FinanceListProps) => {
  const { balanceSheet } = useFinanceCtx();

  // TODO format losses red
  // TODO give variable length properties a fixed container size and truncate on overflow, ie category and name
  // TODO const transactions = filterAutomaticallyGeneratedEquityTransactions without losing privateinlage und so;

  return (
    <div className="flex flex-col gap-3">
      {balanceSheet.getTransactions().map((tranaction, i) => {
        const { category, date, name, amount } = tranaction;
        return (
          <FinanceListItem
            key={i}
            category={category}
            date={date}
            senderReciever={name}
            amount={amount}
          />
        );
      })}
    </div>
  );
};

export default FinanceList;
