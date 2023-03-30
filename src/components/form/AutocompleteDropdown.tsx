import { useState, Fragment, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

export type ItemType = { id: number; name: string; value: string };

interface AutocompleteDropdownProps {
  list: ItemType[];
  onChange: (item: ItemType) => void;
  value?: ItemType;
  className?: string;
  showChevron?: boolean;
}

// TODO extend 'clickable area'
const AutocompleteDropdown = ({
  list,
  onChange,
  value,
  className,
  showChevron = true,
}: AutocompleteDropdownProps) => {
  const [selected, setSelected] = useState(value ?? list[0]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const filteredList =
    query === ""
      ? list
      : list.filter((listItem) =>
          listItem.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative ">
        <div
          className="relative w-full cursor-default overflow-hidden text-left shadow-md flex justify-between bg-[var(--bg-muted)] py-2 px-3 text-[var(--white)] font-medium text-lg rounded-lg border border-[var(--black-muted)] hover:border-[var(--white-muted)] focus:border-[var(--white-muted)] active:border-[var(--white-muted)]
        "
        >
          <Combobox.Input
            className={`bg-inherit outline-none ${className}`}
            displayValue={(item: ItemType) => item.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button>
            <FaChevronDown className={`${!showChevron && "invisible"}`} />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute flex flex-col gap-2 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[var(--bg-muted)]  text-base shadow-lg focus:outline-none">
            {filteredList.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-[var(--white-muted)]">
                Nothing found.
              </div>
            ) : (
              filteredList.map((listItem) => (
                <Combobox.Option
                  key={listItem.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-2 ${
                      active
                        ? "bg-[var(--accent)] text-[var(--black)]"
                        : "text-[var(--white)]"
                    }`
                  }
                  value={listItem}
                >
                  {() => {
                    const isSelected = selected.id === listItem.id;

                    return (
                      <div className="flex items-center gap-3">
                        <AiOutlineCheck
                          className={`text-lg ${
                            isSelected ? "visible" : "invisible"
                          }`}
                          aria-hidden="true"
                        />
                        <p
                          className={` truncate ${
                            isSelected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {listItem.name}
                        </p>
                      </div>
                    );
                  }}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default AutocompleteDropdown;
