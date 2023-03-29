import { ReactNode } from "react";

import { DashboardCtxProvider } from "./DashboardCtx";
import { FinanceCtxProvider } from "./FinanceCtx";

interface Props {
  children: ReactNode;
}
export default function CtxProvider({ children }: Props) {
  return (
    <FinanceCtxProvider>
      <DashboardCtxProvider>{children}</DashboardCtxProvider>
    </FinanceCtxProvider>
  );
}
