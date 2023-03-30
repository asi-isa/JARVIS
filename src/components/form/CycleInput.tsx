import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { toWords } from "number-to-words";

import { Cycle } from "../../accounting/types";

import AutocompleteDropdown from "./AutocompleteDropdown";
import Input from "./Input";

interface CylcleInputProps {
  value: Cycle | undefined;
  onChange: (cycle: Cycle) => void;
}

type PredefinesCycle = {
  name: string;
  cycle: Cycle;
};

const cycles: { id: number; name: string; value: keyof Duration }[] = [
  { id: 0, name: "Yearly", value: "years" },
  { id: 1, name: "Monthly", value: "months" },
  { id: 2, name: "Weekly", value: "weeks" },
  { id: 3, name: "Daily", value: "days" },
];

const predefinedCycles: PredefinesCycle[] = [
  { name: "Monthly", cycle: { cycle: "months", every: 1 } },
  { name: "Yearly", cycle: { cycle: "years", every: 1 } },
  { name: "Weekly", cycle: { cycle: "weeks", every: 1 } },
  { name: "Daily", cycle: { cycle: "days", every: 1 } },
];

const CylcleInput = ({ value, onChange }: CylcleInputProps) => {
  const [cycle, setCycle] = useState<Cycle | undefined>(value);

  const [customCycle, setCustomCycle] = useState<Cycle>({
    cycle: "months",
    every: 6,
  });

  useEffect(() => {
    if (cycle) {
      onChange(cycle);
    }
  }, [cycle]);

  function cycleToStr(cycle_: Cycle) {
    const { cycle, every } = cycle_;

    if (cycle === "years") {
      return every === 1 ? "Yearly" : `Every ${toWords(every)} years`;
    } else if (cycle == "months") {
      return every === 1 ? "Monthly" : `Every ${toWords(every)} months`;
    } else if (cycle == "weeks") {
      return every === 1 ? "Weekly" : `Every ${toWords(every)} weeks`;
    } else {
      return every === 1 ? "Daily" : `Every ${toWords(every)} days`;
    }
  }

  function onCustomCycle() {
    let every = isNaN(customCycle.every) ? 1 : customCycle.every;

    // for the case 'every' was NaN
    setCustomCycle({
      cycle: customCycle.cycle,
      every,
    });

    setCycle({
      cycle: customCycle.cycle,
      every,
    });
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="font-medium">Cycle</p>

      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`bg-[var(--bg-muted)] py-2 px-3 text-[var(--white)] font-medium text-lg rounded-lg border border-[var(--black-muted)] hover:border-[var(--white-muted)] focus:border-[var(--white-muted)] active:border-[var(--white-muted)] w-[268px] text-left`}
            >
              {cycle ? cycleToStr(cycle) : "Choose a Cycle"}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bottom-[110%] z-20 ">
                <div className=" rounded-lg shadow-xl">
                  <div className="relative grid grid-cols-2 bg-[var(--bg)]  ">
                    {predefinedCycles.map((item, i) => (
                      <Popover.Button
                        key={i}
                        onClick={() => setCycle(item.cycle)}
                      >
                        <p className="text-[var(--white)] font-medium border border-white/5 py-4">
                          {item.name}
                        </p>
                      </Popover.Button>
                    ))}
                  </div>

                  <div className="flex items-end gap-4 bg-[var(--bg-muted)] p-4">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium">Cycle</p>

                      <AutocompleteDropdown
                        className="w-24"
                        list={cycles}
                        value={
                          cycles.filter((c) => c.value === customCycle.cycle)[0]
                        }
                        onChange={(item) => {
                          setCustomCycle({
                            ...customCycle,
                            cycle: item.value as keyof Duration,
                          });
                        }}
                      />
                    </div>

                    <Input
                      className="w-20"
                      id="every"
                      title="Every"
                      type="number"
                      min={1}
                      value={customCycle.every.toString()}
                      onChange={(e) => {
                        setCustomCycle({
                          ...customCycle,
                          every: e.target.valueAsNumber,
                        });
                      }}
                    />

                    <Popover.Button onClick={onCustomCycle}>
                      <p className="bg-[var(--accent)] text-[var(--bg)] font-medium rounded-md py-[11px] px-5">
                        Custom
                      </p>
                    </Popover.Button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default CylcleInput;
