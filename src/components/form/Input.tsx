import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProps {
  id: string;
  title: string;
  type: HTMLInputTypeAttribute;
  value: string;
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  min?: React.InputHTMLAttributes<HTMLInputElement>["min"];
  hideNumberInputArrows?: boolean;
}

// TODO InputScaffold => title, gap, ...
const Input = ({
  id,
  title,
  type,
  value,
  className,
  onChange,
  min,
  hideNumberInputArrows = false,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="capitalize font-medium" htmlFor={id}>
        {title}
      </label>
      <input
        className={`bg-[var(--bg-muted)] py-2 px-3 text-[var(--white)] font-medium text-lg rounded-lg border border-[var(--black-muted)] hover:border-[var(--white-muted)] focus:border-[var(--white-muted)] active:border-[var(--white-muted)] ${
          hideNumberInputArrows && "hide-number-input-arrows"
        }`}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        min={min}
      />
    </div>
  );
};

export default Input;
