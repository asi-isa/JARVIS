import { FormEvent, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { IoClose } from "react-icons/io5";

import { useFinanceCtx } from "../../ctx/FinanceCtx";
import { generateID } from "../../lib/util";
import Transaction from "../../accounting/types";

import CategoryInput from "../form/CategoryInput";
import DateInput from "../form/DateInput";
import Input from "../form/Input";
import Modal from "../modal";
import ToggleInput from "../form/ToggleInput";
import CylcleInput from "../form/CycleInput";
import DebitToCreditInput from "../form/DebitToCreditInput";

interface AddFinanceFormProps {
  show: boolean;
  onClose: () => void;
}

const recurrentConVariants: Variants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "fit-content",
  },
  exit: { opacity: 0, height: 0 },
};

const INITIAL_FINANCE = {
  name: "",
  category: "",
  date: new Date(),
  isRecurrent: false,
  recurrentUntil: undefined,
  recurringCycle: undefined,
  amount: 0,
  creditor: "",
  debitor: "",
  id: generateID(),
};

const AddFinanceForm = ({ show, onClose }: AddFinanceFormProps) => {
  const { debitToCredit } = useFinanceCtx();

  const [finance, setFinance] = useState<Transaction>(INITIAL_FINANCE);

  console.log("finance", finance);

  // function updateState<T>(
  //   key: keyof T,
  //   value: T[keyof T],
  //   setState: Dispatch<SetStateAction<T>>
  // ) {
  //   setState((currentState) => {
  //     return { ...currentState, [key]: value };
  //   });
  // }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO check if form is filled properly

    debitToCredit(finance);

    // reset form
    setFinance({ ...INITIAL_FINANCE, id: generateID() });

    onClose();
  }

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
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 bg-[var(--bg)] p-5 rounded-lg shadow-2xl relative border border-[var(--black-muted)]"
      >
        <div className="flex items-center justify-between text-[var(--white)]">
          <p className="text-2xl font-medium">Add New Finance</p>
          <IoClose className="cursor-pointer text-2xl" onClick={onClose} />
        </div>

        <div className="flex flex-col gap-8">
          <Input
            id="what"
            autofocus
            title="Description"
            type="text"
            value={finance.name}
            onChange={(e) => updateFinance("name", e.target.value)}
          />

          <DebitToCreditInput
            value={{
              debitor: finance.debitor,
              creditor: finance.creditor,
              amount: finance.amount,
            }}
            onChange={(value) => {
              updateFinance("debitor", value.debitor);
              updateFinance("creditor", value.creditor);
              updateFinance("amount", value.amount);
            }}
          />

          <div className="flex gap-6">
            <DateInput
              title="When"
              onChange={(date) => updateFinance("date", date)}
            />

            <CategoryInput
              onChange={(item) => updateFinance("category", item.value)}
            />
          </div>

          <ToggleInput
            title="Is It Recurrent"
            isOn={finance.isRecurrent}
            onChange={(isOn) => updateFinance("isRecurrent", isOn)}
          />

          {/* wrapped inside a div to avoid springy layout animation caused by the gap property */}
          <div className="">
            <AnimatePresence>
              {finance.isRecurrent && (
                <motion.div
                  variants={recurrentConVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex gap-6"
                >
                  <DateInput
                    title="Recurrent Until"
                    onChange={(date) => updateFinance("recurrentUntil", date)}
                  />

                  <CylcleInput
                    value={finance.recurringCycle}
                    onChange={(cycle) => updateFinance("recurringCycle", cycle)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-3 self-end">
            <p
              className="bg-[var(--bg-muted)] text-[var(--white)] text-lg font-medium px-4 py-2 rounded-lg border border-[var(--black-muted)] cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </p>

            <input
              className="bg-[var(--accent)] text-[var(--bg)] text-lg font-medium  px-4 py-2 rounded-lg border border-[var(--black-muted)] cursor-pointer"
              type="submit"
              value="Save"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddFinanceForm;
