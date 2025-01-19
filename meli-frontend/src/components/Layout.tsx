import "@styles/Layout.scss";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout_content">
        <div />
        <Outlet />
        <div />
      </div>
    </div>
  );
};
