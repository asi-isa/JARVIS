export type AccountType =
  | "asset"
  | "liability"
  | "proprietary"
  | "profit"
  | "loss";

export default class Account {
  private name: string;
  private type: AccountType;
  private debit: Map<string, number>;
  private credit: Map<string, number>;
  private balance: number;

  constructor(name: string, type: AccountType) {
    this.name = name;
    this.type = type;
    this.debit = new Map();
    this.credit = new Map();
    this.balance = 0;
  }

  onDebit(creditor: string, amount: number) {
    if (this.debit.has(creditor)) {
      const oldAmount = this.debit.get(creditor)!;
      this.debit.set(creditor, oldAmount + amount);
    } else {
      this.debit.set(creditor, amount);
    }

    this.balance = this.calculateBalance();
  }

  onCredit(debitor: string, amount: number) {
    if (this.credit.has(debitor)) {
      const oldAmount = this.credit.get(debitor)!;
      this.credit.set(debitor, oldAmount + amount);
    } else {
      this.credit.set(debitor, amount);
    }

    this.balance = this.calculateBalance();
  }

  private calculateBalance() {
    const isDebitAccount = this.type === "asset" || this.type === "loss";

    let balance = 0;

    if (isDebitAccount) {
      this.debit.forEach((value) => {
        balance += value;
      });

      this.credit.forEach((value) => {
        balance -= value;
      });

      return balance;
    }

    this.debit.forEach((value) => {
      balance -= value;
    });

    this.credit.forEach((value) => {
      balance += value;
    });

    return balance;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getBalance() {
    return this.balance;
  }
}
