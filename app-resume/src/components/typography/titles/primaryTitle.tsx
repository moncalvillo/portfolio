export type TypographyProps = {
  className: string;
  style: React.CSSProperties;
  children: string | React.ReactNode;
  accent?: boolean;
};

export const PrimaryTitle = (props: Partial<TypographyProps>) => {
  const { className = "", style = {}, children, accent } = props;
  return (
    <h1
      className={`primary-title title text-${
        accent ? "primary" : "secondary"
      }-palette ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
};
