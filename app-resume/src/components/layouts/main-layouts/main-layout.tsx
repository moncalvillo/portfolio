import "./style.scss";
export interface MainLayoutProps {}

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center bg-bg-palette"
      id="main-layout"
    >
      <div className="my-4 layout-content">{children}</div>
    </div>
  );
};
