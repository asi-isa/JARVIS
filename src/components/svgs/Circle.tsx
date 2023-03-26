import { motion } from "framer-motion";
import { SVGAttributes } from "react";

interface CircleProps {
  className?: SVGAttributes<SVGSVGElement>["className"];
  pathLength: number;
}

const Circle = ({ className, pathLength }: CircleProps) => {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.circle
        initial={{ pathLength: 0 }}
        animate={{ pathLength }}
        transition={{ duration: 1 }}
        cx="50"
        cy="50"
        r="45"
        strokeWidth={9}
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default Circle;
