import CtxProvider from "./ctx/Ctx";

import Calender from "./components/calendar";
import Dashboard from "./components/dashboard";
import BalanceSheet from "./accounting";
import Account from "./accounting/Account";

// TODO test balance
// const balance = new BalanceSheet();

// // privateinlage
// balance.debitToCredit({
//   debitor: "bank",
//   creditor: "equity",
//   amount: 50,
//   name: "privateinlage",
//   date: new Date(1994, 9, 5),
//   category: "privateinlage",
// });

// balance.addAccount(new Account("food", "loss"));

// balance.debitToCredit({
//   debitor: "food",
//   creditor: "bank",
//   amount: 50,
//   name: "buy groceries",
//   date: new Date(1994, 9, 6),
//   category: "grocery",
// });

// balance.addAccount(new Account("salary", "profit"));

// balance.debitToCredit({
//   debitor: "bank",
//   creditor: "salary",
//   amount: 100,
//   name: "get salary",
//   date: new Date(1994, 9, 7),
//   category: "salary",
// });

// console.log(balance);

function App() {
  return (
    <div className="h-screen flex p-3">
      {/* <Calender /> */}
      <CtxProvider>
        <Dashboard />
      </CtxProvider>
    </div>
  );
}

export default App;
