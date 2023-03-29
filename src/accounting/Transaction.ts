// TODO
// type file
// add isRecurrent flag

export default interface Transaction {
  id: string;
  category: string;
  date: Date;
  isRecurrent: boolean;
  creditor: string;
  debitor: string;
  name: string;
  amount: number;
}
