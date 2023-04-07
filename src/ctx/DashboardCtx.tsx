import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type DashboardName =
  | "dashboard"
  | "finances"
  | "tasks"
  | "calendar"
  | "projects"
  | "settings";

type DashboardCtxType = {
  selectedDashboard: DashboardName;
  setSelectedDashboard: Dispatch<SetStateAction<DashboardName>>;
};

const DashboardCtx = createContext<DashboardCtxType>({
  selectedDashboard: "dashboard",
  setSelectedDashboard: () => {},
});

export const DashboardCtxProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDashboard, setSelectedDashboard] =
    useState<DashboardName>("projects");

  return (
    <DashboardCtx.Provider value={{ selectedDashboard, setSelectedDashboard }}>
      {children}
    </DashboardCtx.Provider>
  );
};

export const useDashboardCtx = () => useContext(DashboardCtx);
