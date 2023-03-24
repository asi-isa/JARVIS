import Brand from "../../Brand";
import Divider from "../../Divider";
import ThemeToggle from "../../ThemeToggle";
import MenuItems from "./MenuItems";

interface MenuProps {}

const Menu = ({}: MenuProps) => {
  return (
    <div className="w-fit flex flex-col items-center gap-6 mx-3">
      <Brand />

      <Divider />

      <MenuItems />

      <ThemeToggle />
    </div>
  );
};

export default Menu;
