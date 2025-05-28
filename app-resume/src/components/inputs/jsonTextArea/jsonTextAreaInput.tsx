import { Input } from "antd";

export const JsonTextArea = ({
  placeholder,
  disabled,
  onChange,
  value,
}: {
  placeholder: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  value?: string;
}) => {
  const handleKeyDown = (e: any) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const value = e.target.value;

      e.target.value = `${value.substring(0, start)}\t${value.substring(end)}`;

      e.target.selectionStart = e.target.selectionEnd = start + 1;
    }
  };

  return (
    <Input.TextArea
      value={value}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      allowClear
      autoSize
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};
