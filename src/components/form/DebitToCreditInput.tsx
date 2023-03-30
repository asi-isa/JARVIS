import { ChangeEvent, useState } from "react";
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
}

const DebitToCreditInput = ({ value, onChange }: DebitToCreditInputProps) => {
  // TODO get from balance
  const accounts = [
    { id: 0, name: "Bank", value: "bank" },
    { id: 1, name: "Grocery", value: "grocery" },
  ];

  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-1">
        <p className="font-medium">Debitor</p>

        <AutocompleteDropdown
          list={accounts}
          showChevron={false}
          value={accounts.filter((a) => a.value === value.debitor)[0]}
          onChange={(item) => {
            onChange({ ...value, debitor: item.value });
          }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-medium">Creditor</p>

        <AutocompleteDropdown
          list={accounts}
          showChevron={false}
          value={accounts.filter((a) => a.value === value.creditor)[0]}
          onChange={(item) => {
            onChange({ ...value, creditor: item.value });
          }}
        />
      </div>

      {/* TODO format input like currency */}
      <Input
        id="amount"
        className="w-24"
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
