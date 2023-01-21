import ProfileInfo from "./components/ProfileInfo";
import Topbar from "./components/Topbar";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <ProfileInfo />
    </div>
  );
}
