import { ReactElement } from "react";

interface LogoBtnProps {
  Logo: ReactElement;
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const LogoBtn = ({ Logo, title, onClick, isActive }: LogoBtnProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 py-3 px-5 rounded-lg hover:bg-[var(--black-muted)] cursor-pointer ${
        isActive && "bg-[var(--black-muted)]"
      }`}
    >
      <p className="text-[var(--white)]">{Logo}</p>
      <p className={`text-sm ${isActive && "text-[var(--white)]"}`}>{title}</p>
    </div>
  );
};

export default LogoBtn;
