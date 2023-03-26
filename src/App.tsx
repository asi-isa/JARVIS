import { DashboardCtxProvider } from "./ctx/DashboardCtx";

import Calender from "./components/calendar";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="h-screen flex p-3">
      {/* <Calender /> */}
      <DashboardCtxProvider>
        <Dashboard />
      </DashboardCtxProvider>
    </div>
  );
}

export default App;
