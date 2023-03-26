import { ReactNode } from "react";

interface CardProps {
  styles?: React.HTMLAttributes<HTMLDivElement>["className"];
  onClick?: () => void;
  children: ReactNode;
}

const Card = ({ styles, children, onClick }: CardProps) => {
  return (
    <div
      className={`border border-white/30 rounded-md h-full w-full ${styles} ${
        onClick && "cursor-pointer"
      }`}
      onClick={onClick ?? undefined}
    >
      {children}
    </div>
  );
};

export default Card;
