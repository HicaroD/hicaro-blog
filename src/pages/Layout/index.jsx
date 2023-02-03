import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import styles from "./style.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Topbar />
      <Outlet />
    </div>
  );
}
