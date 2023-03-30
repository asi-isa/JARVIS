import { motion } from "framer-motion";
import { ReactElement } from "react";

interface ToggleProps {
  isOn: boolean;
  onChange: (isOn: boolean) => void;
  isOnTitle: string;
  isOffTitle: string;
  IsOnIcon: ReactElement;
  IsOffIcon: ReactElement;
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 50,
};

const Toggle = ({
  isOn,
  onChange,
  isOnTitle,
  isOffTitle,
  IsOffIcon,
  IsOnIcon,
}: ToggleProps) => {
  return (
    <div className="flex gap-2 items-center mt-auto">
      <p
        className={`text-sm ${
          isOn ? "text-[var(--white)]" : "text-[var(--white-muted)]"
        }`}
      >
        {isOnTitle}
      </p>
      <div
        onClick={() => onChange(!isOn)}
        className={`flex items-center gap-3 border border-[var(--white-muted)] px-[2px] py-[4px] rounded-3xl relative cursor-pointer ${
          isOn ? "justify-start" : "justify-end"
        }`}
      >
        <motion.div
          layout
          transition={spring}
          className="absolute h-[85%] aspect-square bg-[var(--accent)] rounded-full"
        />
        <div className="ml-[4px] text-[var(--white)]">{IsOffIcon}</div>
        <div className="mr-[4px] text-[var(--white)]">{IsOnIcon}</div>
      </div>
      <p
        className={`text-sm ${
          !isOn ? "text-[var(--white)]" : "text-[var(--white-muted)]"
        }`}
      >
        {isOffTitle}
      </p>
    </div>
  );
};

export default Toggle;
