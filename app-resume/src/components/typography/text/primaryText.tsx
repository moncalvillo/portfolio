import { TypographyProps } from "../titles/primaryTitle";

export const Text = (props: Partial<TypographyProps>) => {
  const { className = "", children, accent } = props;

  return (
    <p
      className={`text text-${
        accent ? "primary" : "accent"
      }-palette ${className}`}
    >
      {children}
    </p>
  );
};
