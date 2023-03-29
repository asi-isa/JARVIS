export default interface Transaction {
  id: string;
  category: string;
  date: Date;
  creditor: string;
  debitor: string;
  name: string;
  amount: number;
}
