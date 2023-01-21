import "./style.css";

export default function Button(props) {
  return (
    <button id={props.id} className="button">
      {props.label}
    </button>
  );
}
