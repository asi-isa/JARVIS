import { BiChevronRight } from "react-icons/bi";
import { dateToStr } from "../../lib/date";
import { toDollar } from "../../lib/num";

interface FinanceListItemProps {
  category: string;
  date: Date;
  senderReciever: string;
  amount: number;
}

const FinanceListItem = ({
  category,
  date,
  senderReciever,
  amount,
}: FinanceListItemProps) => {
  return (
    <div className="flex gap-3 items-center justify-between bg-[var(--bg-muted)] p-4 rounded-lg w-[80%] m-auto cursor-pointer hover:translate-x-1 transition-transform">
      <div className="">
        <span className="text-sm">#</span>
        <span className="text-[var(--white)] text-md font-semibold uppercase">
          {category}
        </span>
      </div>
      <p>{dateToStr(date)}</p>
      <p className="w-[33ch] truncate">{senderReciever}</p>
      <p
        className={`${
          amount >= 0 ? "text-[var(--white)]" : "text-[var(--red)]"
        } text-lg font-bold`}
      >
        {toDollar(amount)}
      </p>

      <BiChevronRight className="text-[var(--white)] text-xl" />
    </div>
  );
};

export default FinanceListItem;
