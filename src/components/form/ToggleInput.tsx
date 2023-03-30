import { TbRepeat, TbRepeatOff } from "react-icons/tb";

import Toggle from "../toggle";

interface ToggleInputProps {
  title: string;
  isOn: boolean;
  onChange: (isOn: boolean) => void;
}

const ToggleInput = ({ title, isOn, onChange }: ToggleInputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-medium">{title}</p>

      <Toggle
        isOn={isOn}
        onChange={onChange}
        isOnTitle="Recurrent"
        isOffTitle="Not Recurrent"
        IsOnIcon={<TbRepeat />}
        IsOffIcon={<TbRepeatOff />}
      />
    </div>
  );
};

export default ToggleInput;
