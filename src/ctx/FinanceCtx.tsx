import { createContext, ReactNode, useContext, useState } from "react";

import BalanceSheet from "../accounting";
import { AccountType } from "../accounting/Account";
import Transaction from "../accounting/types";

type FinanceCtxType = {
  balanceSheet: BalanceSheet;
  setBalanceSheet: React.Dispatch<React.SetStateAction<BalanceSheet>>;
  debitToCredit: (transaction: Transaction) => void;
  addAccount: (name: string, type: AccountType) => void;
};

const FinanceCtx = createContext<FinanceCtxType>({
  balanceSheet: new BalanceSheet(),
  setBalanceSheet: () => {},
  debitToCredit: () => {},
  addAccount: () => {},
});

export const FinanceCtxProvider = ({ children }: { children: ReactNode }) => {
  // TODO get from persistent storage or create new instance
  const [balanceSheet, setBalanceSheet] = useState(new BalanceSheet());
  console.log("balalanceSheet", balanceSheet);

  function debitToCredit(transaction: Transaction) {
    setBalanceSheet((balance) => {
      balance.debitToCredit(transaction);

      return balance.copy();
    });
  }

  function addAccount(name: string, type: AccountType) {
    setBalanceSheet((balance) => {
      balance.addAccount(name, type);

      return balance.copy();
    });
  }

  return (
    <FinanceCtx.Provider
      value={{ balanceSheet, setBalanceSheet, debitToCredit, addAccount }}
    >
      {children}
    </FinanceCtx.Provider>
  );
};

export const useFinanceCtx = () => useContext(FinanceCtx);
