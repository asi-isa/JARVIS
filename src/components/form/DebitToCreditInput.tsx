import { ChangeEvent, useState } from "react";
import { useFinanceCtx } from "../../ctx/FinanceCtx";
import { capitalize } from "../../lib/str";
import AutocompleteDropdown, { ItemType } from "./AutocompleteDropdown";
import Input from "./Input";

type DebitToCreditType = {
  debitor: string;
  creditor: string;
  amount: number;
};

interface DebitToCreditInputProps {
  value: DebitToCreditType;
  onChange: (value: DebitToCreditType) => void;
  displayErrors: { debitor: boolean; creditor: boolean; amount: boolean };
}

const DebitToCreditInput = ({
  value,
  onChange,
  displayErrors,
}: DebitToCreditInputProps) => {
  const { balanceSheet } = useFinanceCtx();
  // TODO get from balance
  const accounts = balanceSheet.getAccountNames().map((accountName, i) => {
    return {
      id: i + 1,
      name: capitalize(accountName),
      value: accountName,
    };
  });

  const ACCOUNTS = [
    { id: 0, name: "Select an Account", value: "" },

    ...accounts,
  ];

  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-1">
        <p className="font-medium">Debitor</p>

        <AutocompleteDropdown
          list={ACCOUNTS}
          displayError={displayErrors.debitor}
          showChevron={false}
          value={ACCOUNTS.filter((a) => a.value === value.debitor)[0]}
          onChange={(item) => {
            onChange({ ...value, debitor: item.value });
          }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-medium">Creditor</p>

        <AutocompleteDropdown
          list={ACCOUNTS}
          displayError={displayErrors.creditor}
          showChevron={false}
          value={ACCOUNTS.filter((a) => a.value === value.creditor)[0]}
          onChange={(item) => {
            onChange({ ...value, creditor: item.value });
          }}
        />
      </div>

      {/* TODO format input like currency */}
      <Input
        id="amount"
        className="w-24"
        displayError={displayErrors.amount}
        hideNumberInputArrows={true}
        title="Amount"
        type="number"
        min={0}
        value={value.amount.toString()}
        onChange={(e) => {
          onChange({ ...value, amount: e.target.valueAsNumber });
        }}
      />
    </div>
  );
};

export default DebitToCreditInput;
