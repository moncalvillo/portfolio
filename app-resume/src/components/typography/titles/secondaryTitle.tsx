import { TypographyProps } from "./primaryTitle";
export const SecondaryTitle = (props: Partial<TypographyProps>) => {
  const { className = "", style = {}, children, accent } = props;
  return (
    <h2
      className={`secondary-title title text-${
        accent ? "primary" : "accent"
      }-palette ${className}`}
      style={style}
    >
      {children}
    </h2>
  );
};
