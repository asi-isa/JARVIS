export type Cycle = {
  cycle: keyof Duration;
  every: number;
};

export default interface Transaction {
  id: string;
  category: string;
  date: Date;
  isRecurrent: boolean;
  recurrentUntil: Date | undefined;
  recurringCycle: Cycle | undefined;
  creditor: string;
  debitor: string;
  name: string;
  amount: number;
}
