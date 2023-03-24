interface BrandProps {}
import { FaConnectdevelop } from "react-icons/fa";

const Brand = ({}: BrandProps) => {
  return (
    <div className="flex items-center gap-2">
      <FaConnectdevelop className="text-[var(--accent)] text-2xl" />
      <p className="text-xl text-[var(--white)]">JARVIS</p>
    </div>
  );
};

export default Brand;
