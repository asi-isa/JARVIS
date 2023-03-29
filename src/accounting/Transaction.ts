// TODO
// move to  type file

export default interface Transaction {
  id: string;
  category: string;
  date: Date;
  isRecurrent: boolean;
  recurrentUntil: Date | undefined;
  creditor: string;
  debitor: string;
  name: string;
  amount: number;
}
