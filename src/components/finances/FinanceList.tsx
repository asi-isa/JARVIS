import { useFinanceCtx } from "../../ctx/FinanceCtx";
import FinanceListItem from "./FinanceListItem";

interface FinanceListProps {}

const FinanceList = ({}: FinanceListProps) => {
  const { balanceSheet } = useFinanceCtx();

  // const transactions = filterAutomaticallyGeneratedEquityTransactions without losing privateinlage und so;

  return (
    <div className="flex flex-col gap-3">
      // TODO balanceSheet.getTransactions()
      {balanceSheet.transactions.map((tranaction, i) => {
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
