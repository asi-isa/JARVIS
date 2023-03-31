import AutocompleteDropdown, { ItemType } from "./AutocompleteDropdown";

interface CategoryInputProps {
  onChange: (item: ItemType) => void;
  displayError: boolean;
}

const CategoryInput = ({ onChange, displayError }: CategoryInputProps) => {
  // TODO get from balanceSheet
  // TODO infer value from debitor, creditor

  const CATEGORIES = [
    { id: 0, name: "Select a category", value: "" },
    { id: 1, name: "Groceries", value: "grocery" },
    { id: 2, name: "Salary", value: "salary" },
  ];

  return (
    <div className="flex flex-col gap-1">
      <p className="font-medium">Category</p>
      <AutocompleteDropdown
        displayError={displayError}
        list={CATEGORIES}
        onChange={onChange}
      />
    </div>
  );
};

export default CategoryInput;
