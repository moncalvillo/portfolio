export interface BoxProps {
  title?: string;
  body?: string;
  children?: React.ReactNode;
}
export const Box = (props: BoxProps) => {
  const {
    title = "Example title",
    body = "This is a example of body text",
    children,
  } = props;

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center w-100 p-2 mb-3">
      <div className="card w-100 p-3 shadowed">
        <div className="row no-gutters">
          <div className="card-body">
            {children ? (
              children
            ) : (
              <>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
