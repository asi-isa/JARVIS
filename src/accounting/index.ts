import { generateID } from "../lib/util";
import Account, { AccountType } from "./Account";
import Transaction from "./Transaction";

export default class BalanceSheet {
  private accounts: Map<string, Account> = new Map();
  // quick fix
  // i get an 'getTransaction is not a function' error
  // when invoking the getter method after setting/
  // updating a new balance ???
  transactions: Transaction[] = [];

  constructor(accounts?: Map<string, Account>, transactions?: Transaction[]) {
    if (accounts && transactions) {
      this.accounts = accounts;
      this.transactions = transactions;
      return this;
    }

    this.initBalanceSheet();
  }

  addAccount(name: string, type: AccountType) {
    this.accounts.set(name, new Account(name, type));
    return this;
  }

  // TODO to retrun this or not to return? ;)
  debitToCredit(transaction: Transaction): BalanceSheet {
    this.transactions.push(transaction);

    const { debitor, creditor, amount } = transaction;

    const debitorAccount = this.accounts.get(debitor);
    debitorAccount?.onDebit(creditor, amount);

    const creditorAccount = this.accounts.get(creditor);
    creditorAccount?.onCredit(debitor, amount);

    // update equity if profit or loss account affected

    // loss account as debitor => equity reduction
    if (debitorAccount?.getType() === "loss") {
      return this.debitToCredit({
        ...transaction,
        id: generateID(),
        debitor: "equity",
        creditor: debitorAccount.getName(),
      });
    }

    // profit account as creditor => equity increase
    if (creditorAccount?.getType() === "profit") {
      return this.debitToCredit({
        ...transaction,
        id: generateID(),
        debitor: creditorAccount.getName(),
        creditor: "equity",
      });
    }

    return this;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  copy(): BalanceSheet {
    return new BalanceSheet(this.accounts, this.transactions);
  }

  private initBalanceSheet() {
    this.addAccount("properties", "asset");
    this.addAccount("buildings", "asset");
    this.addAccount("vehicles", "asset");
    this.addAccount("receivables", "asset");
    this.addAccount("bank", "asset");
    this.addAccount("cash", "asset");
    this.addAccount("equity", "proprietary");
    this.addAccount("loans", "liability");
    this.addAccount("shortTermLoans", "liability");
    this.addAccount("liabilities", "liability");
  }
}
