import { ImSun } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface ThemeToggleProps {}

const ThemeToggle = ({}: ThemeToggleProps) => {
  return (
    <div className="flex gap-2 items-center mt-auto">
      <p className="text-sm">Light</p>
      <div className="flex justify-end items-center gap-3 border border-[var(--white-muted)] px-[2px] py-[4px] rounded-3xl relative">
        <div className="absolute h-[85%] aspect-square bg-[var(--accent)] rounded-full" />
        <ImSun className="ml-[4px] text-[var(--white)]" />
        <BsFillMoonStarsFill className="mr-[4px] text-[var(--white)]" />
      </div>
      <p className="text-sm text-[var(--white)]">Dark</p>
    </div>
  );
};

export default ThemeToggle;
