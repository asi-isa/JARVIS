import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
}

const Modal = ({ children, show, onClose }: ModalProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 -z-10  backdrop-blur-md"
            onClick={onClose}
          />

          <div className="">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
