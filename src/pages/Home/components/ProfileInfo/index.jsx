import ProfileDescription from "./components/ProfileDescription";
import ProfilePicture from "./components/ProfilePicture";
import "./style.css";

export default function ProfileInfo() {
	return (
		<div className="profile-info">
			<ProfilePicture />
			<ProfileDescription />
			<hr></hr>
		</div>
	);
}
