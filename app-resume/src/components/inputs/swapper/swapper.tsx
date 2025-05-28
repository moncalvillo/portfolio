import { Segmented } from "antd";
type SwapperProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  options: string[];
};
export const Swapper = (props: Partial<SwapperProps>) => {
  const { value, onChange, options = ["Option 1", "Option 2"] } = props;
  return (
    <Segmented
      className="mb-2"
      options={options}
      value={value}
      onChange={onChange}
      block
    />
  );
};
