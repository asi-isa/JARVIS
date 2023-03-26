import { ReactNode } from "react";

interface CardProps {
  styles?: React.HTMLAttributes<HTMLDivElement>["className"];
  onClick?: () => void;
  children: ReactNode;
}

const Card = ({ styles, children, onClick }: CardProps) => {
  return (
    <div
      className={`rounded-xl overflow-hidden h-full w-full ${styles} ${
        onClick && "cursor-pointer"
      }`}
      onClick={onClick ?? undefined}
    >
      {children}
    </div>
  );
};

export default Card;
