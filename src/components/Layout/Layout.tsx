import { Header } from "components/Header";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
    </>
  );
};
