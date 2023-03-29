import { createContext, ReactNode, useContext, useState } from "react";
import BalanceSheet from "../accounting";

type FinanceCtxType = {
  balanceSheet: BalanceSheet;
  setBalanceSheet: React.Dispatch<React.SetStateAction<BalanceSheet>>;
};

const FinanceCtx = createContext<FinanceCtxType>({
  balanceSheet: new BalanceSheet(),
  setBalanceSheet: () => {},
});

export const FinanceCtxProvider = ({ children }: { children: ReactNode }) => {
  // TODO get from persistent storage or create new instance
  const [balanceSheet, setBalanceSheet] = useState(new BalanceSheet());

  return (
    <FinanceCtx.Provider value={{ balanceSheet, setBalanceSheet }}>
      {children}
    </FinanceCtx.Provider>
  );
};

export const useFinanceCtx = () => useContext(FinanceCtx);
