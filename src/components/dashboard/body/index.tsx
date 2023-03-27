import { ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { AiOutlineSearch } from "react-icons/ai";

interface BodyProps {
  title: string;
  children: ReactNode;
  isVisible: boolean;
}

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, delay: 0.33 } },
  exit: { opacity: 0, transition: { duration: 0.33 } },
};

const Body = ({ title, children, isVisible }: BodyProps) => {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {isVisible && (
        <motion.div
          key={title}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col gap-6 w-full px-8"
        >
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

          <div className="overflow-y-scroll scrollbar-hide">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Body;
