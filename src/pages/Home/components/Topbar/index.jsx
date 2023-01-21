import Button from "../../../../common/Button";
import "./style.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <h1 id="name">Hícaro</h1>
      <Button id="contact-button" label="Contact me" />
    </div>
  );
}
