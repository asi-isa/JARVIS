import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";
import Transaction from "../../accounting/Transaction";
import { dateToStr } from "../../lib/date";
import { generateID } from "../../lib/util";
import DatePicker from "../calendar/DatePicker";
import DateInput from "../form/DateInput";
import Input from "../form/Input";

import Modal from "../modal";

interface AddFinanceFormProps {
  show: boolean;
  onClose: () => void;
}

const AddFinanceForm = ({ show, onClose }: AddFinanceFormProps) => {
  const [finance, setFinance] = useState<Transaction>({
    name: "",
    category: "",
    date: new Date(),
    amount: 0,
    creditor: "",
    debitor: "",
    id: generateID(),
  });

  console.log(finance);

  // function updateState<T>(
  //   key: keyof T,
  //   value: T[keyof T],
  //   setState: Dispatch<SetStateAction<T>>
  // ) {
  //   setState((currentState) => {
  //     return { ...currentState, [key]: value };
  //   });
  // }

  function updateFinance<K extends keyof Transaction>(
    key: K,
    value: Transaction[K]
  ) {
    setFinance((currentFinance) => {
      return { ...currentFinance, [key]: value };
    });
  }

  return (
    <Modal show={show} onClose={onClose}>
      <div className="flex flex-col gap-8 bg-[var(--bg)] p-4 rounded-lg shadow-2xl ">
        <div className="flex items-center justify-between text-[var(--white)]">
          <p className="text-2xl font-medium">Add New Finance</p>
          <IoClose className="cursor-pointer text-2xl" onClick={onClose} />
        </div>

        <div className="flex flex-col gap-4">
          <Input
            id="what"
            title="Description"
            type="text"
            value={finance.name}
            onChange={(e) => updateFinance("name", e.target.value)}
          />

          <div className="flex gap-3">
            <DateInput />

            {/* CATEGORY */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddFinanceForm;
