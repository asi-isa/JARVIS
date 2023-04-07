import { AiOutlinePlus } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";

interface FinanceListHeaderProps {
  onAddFinanceFormBtn: () => void;
}

const FinanceListHeader = ({ onAddFinanceFormBtn }: FinanceListHeaderProps) => {
  return (
    <div className="flex justify-end">
      <div className="flex items-center gap-3">
        {/* Filter */}
        {/* TODO show past, future */}
        <BsFilterRight className="text-3xl text-[var(--white)] cursor-pointer" />

        {/* AddFinanceBtn */}
        <div
          onClick={onAddFinanceFormBtn}
          className="flex items-center gap-3 px-4 py-2 rounded-3xl bg-[var(--accent)] text-[var(--black)] cursor-pointer"
        >
          <AiOutlinePlus className="text-2xl text-[var(--black)] " />
          <p className="font-medium">Add Finance</p>
        </div>
      </div>
    </div>
  );
};

export default FinanceListHeader;
