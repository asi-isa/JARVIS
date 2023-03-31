import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import * as yup from "yup";
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

type TransactionErrorType = {
  [key in keyof Transaction]: boolean;
};

const recurrentConVariants: Variants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "fit-content",
  },
  exit: { opacity: 0, height: 0 },
};

const INITIAL_TX: Transaction = {
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

const INITIAL_ERROR = {
  name: false,
  category: false,
  date: false,
  isRecurrent: false,
  recurrentUntil: false,
  recurringCycle: false,
  amount: false,
  creditor: false,
  debitor: false,
  id: false,
};

const txSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  date: yup.date().required(),
  isRecurrent: yup.boolean().required().isFalse(),
  amount: yup.number().moreThan(0).required(),
  creditor: yup.string().required(),
  debitor: yup.string().required(),
  id: yup.string().required(),
  recurrentUntil: yup.date(),
  recurringCycle: yup.object(),
});

const recurrentTxSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  date: yup.date().required(),
  isRecurrent: yup.boolean().required().isTrue(),
  amount: yup.number().moreThan(0).required(),
  creditor: yup.string().required(),
  debitor: yup.string().required(),
  id: yup.string().required(),
  recurrentUntil: yup.date().required(),
  recurringCycle: yup.object().required(),
});

const AddFinanceForm = ({ show, onClose }: AddFinanceFormProps) => {
  const { debitToCredit } = useFinanceCtx();

  const [transaction, setTransaction] = useState<Transaction>(INITIAL_TX);

  const [error, setError] = useState<TransactionErrorType>(INITIAL_ERROR);

  function onFormIsValid() {
    // TODO recurrent functionality
    // TODO add recurrentID to TransactionType
    // calculate dates, change id, date, add to balance

    debitToCredit(transaction);

    // reset errors
    setError(INITIAL_ERROR);
    // reset form
    setTransaction({ ...INITIAL_TX, id: generateID() });

    onClose();
  }

  function onFormIsInvalid(e: { errors: string[] }) {
    const newError: Partial<TransactionErrorType> = {};

    e.errors.forEach((err: string) => {
      const key = err.split(" ")[0] as keyof Transaction;
      newError[key] = true;
    });

    // reset errors
    setError(INITIAL_ERROR);

    setError((currentError) => {
      return { ...currentError, ...newError };
    });
  }

  useEffect(() => {
    checkFormInputs();
  }, [transaction]);

  function checkFormInputs() {
    // only check form inputs (while typing) if there were previous errors
    // ie after a 'rejected' form submit
    const formContainsError = Object.values(error).some((e) => e);

    if (formContainsError) {
      const schema = transaction.isRecurrent ? recurrentTxSchema : txSchema;

      schema
        .validate(transaction, { abortEarly: false })
        .then(() => setError(INITIAL_ERROR))
        .catch(onFormIsInvalid);
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const schema = transaction.isRecurrent ? recurrentTxSchema : txSchema;

    schema
      .validate(transaction, { abortEarly: false })
      .then(onFormIsValid)
      .catch(onFormIsInvalid);
  }

  // function updateState<T>(
  //   key: keyof T,
  //   value: T[keyof T],
  //   setState: Dispatch<SetStateAction<T>>
  // ) {
  //   setState((currentState) => {
  //     return { ...currentState, [key]: value };
  //   });
  // }
  function updateTransaction<K extends keyof Transaction>(
    key: K,
    value: Transaction[K]
  ) {
    setTransaction((currentTx) => {
      return { ...currentTx, [key]: value };
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
            displayError={error.name}
            title="Description"
            type="text"
            value={transaction.name}
            onChange={(e) => updateTransaction("name", e.target.value)}
          />

          <DebitToCreditInput
            value={{
              debitor: transaction.debitor,
              creditor: transaction.creditor,
              amount: transaction.amount,
            }}
            onChange={(value) => {
              updateTransaction("debitor", value.debitor);
              updateTransaction("creditor", value.creditor);
              updateTransaction("amount", value.amount);
            }}
            displayErrors={{
              creditor: error.creditor,
              debitor: error.debitor,
              amount: error.amount,
            }}
          />

          <div className="flex gap-6">
            <DateInput
              title="When"
              displayError={error.date}
              onChange={(date) => updateTransaction("date", date)}
            />

            <CategoryInput
              displayError={error.category}
              onChange={(item) => updateTransaction("category", item.value)}
            />
          </div>

          <ToggleInput
            title="Is It Recurrent"
            isOn={transaction.isRecurrent}
            onChange={(isOn) => updateTransaction("isRecurrent", isOn)}
          />

          {/* wrapped inside a div to avoid springy layout animation caused by the gap property */}
          <div className="">
            <AnimatePresence>
              {transaction.isRecurrent && (
                <motion.div
                  variants={recurrentConVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex gap-6"
                >
                  <DateInput
                    title="Recurrent Until"
                    displayError={error.recurrentUntil}
                    onChange={(date) =>
                      updateTransaction("recurrentUntil", date)
                    }
                  />

                  <CylcleInput
                    value={transaction.recurringCycle}
                    displayError={error.recurringCycle}
                    onChange={(cycle) =>
                      updateTransaction("recurringCycle", cycle)
                    }
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
