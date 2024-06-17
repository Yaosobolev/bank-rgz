import { NavbarClient } from "@/components/NavbarClient";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex gap-3 w-screen h-screen bg-slate-100">
      <NavbarClient />
      {/* <div className=" size-full"> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default Layout;
