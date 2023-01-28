import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import "./style.css";

export default function Layout() {
  return (
    <div className="layout">
      <Topbar />
      <Outlet />
    </div>
  );
}
