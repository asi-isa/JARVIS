import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { generateID } from "../../lib/util";

import Transaction from "../../accounting/Transaction";
import CategoryInput from "../form/CategoryInput";
import DateInput from "../form/DateInput";
import Input from "../form/Input";
import Modal from "../modal";
import ToggleInput from "../form/ToggleInput";
import { AnimatePresence, motion, Variants } from "framer-motion";

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

const AddFinanceForm = ({ show, onClose }: AddFinanceFormProps) => {
  const [finance, setFinance] = useState<Transaction>({
    name: "",
    category: "",
    date: new Date(),
    isRecurrent: false,
    recurrentUntil: undefined,
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

        <div className="flex flex-col gap-5">
          <Input
            id="what"
            title="Description"
            type="text"
            value={finance.name}
            onChange={(e) => updateFinance("name", e.target.value)}
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

          <div className="overflow-hidden">
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
                  {/* RecurrenceCycle */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddFinanceForm;
