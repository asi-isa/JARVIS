import { ReactNode } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface BodyProps {
  title: string;
  children: ReactNode;
}

const Body = ({ title, children }: BodyProps) => {
  return (
    <div className="flex flex-col gap-6 w-full px-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <p className="text-2xl text-[var(--white)]">{title}</p>

        <div className="flex items-center gap-2">
          <AiOutlineSearch className="text-[var(--white)] text-xl" />
          <p className="text-sm">Search Something...</p>
        </div>

        <p className="font-semibold  text-[var(--black)] bg-[var(--accent)] py-2 px-4 rounded-xl">
          Upgrade
        </p>
      </div>

      {/* BODY */}
      {children}
    </div>
  );
};

export default Body;
