type UrlBoxProps = {
  children: string | React.ReactNode;
};

export const UrlBox = (props: UrlBoxProps) => {
  const { children } = props;
  return (
    <div className="bg-secondary-palette text-primary-palette p-2 text-center m-3 rounded-3">
      {children}
    </div>
  );
};
