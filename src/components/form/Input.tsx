import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProps {
  id: string;
  title: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

// TODO InputScaffold => title, gap, ...
const Input = ({ id, title, type, value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize font-medium" htmlFor={id}>
        {title}
      </label>
      <input
        className="bg-[var(--bg-muted)] py-2 px-3 text-[var(--white)] font-medium text-lg rounded-lg border border-[var(--black-muted)] hover:border-[var(--white-muted)] focus:border-[var(--white-muted)] active:border-[var(--white-muted)]"
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
