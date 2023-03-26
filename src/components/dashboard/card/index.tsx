import { ReactNode } from "react";

interface CardProps {
  styles?: string;
  children: ReactNode;
}

const Card = ({ styles, children }: CardProps) => {
  return (
    <div
      className={`border border-white/30 rounded-md h-full w-full ${styles}`}
    >
      {children}
    </div>
  );
};

export default Card;
