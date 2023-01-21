import "./style.css";

export default function ProfilePicture() {
	const imageLink =
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa3.espncdn.com%2Fcombiner%2Fi%3Fimg%3D%252Fphoto%252F2020%252F0109%252Fr650263_1296x729_16-9.jpg&f=1&nofb=1&ipt=d7a3e3be9f4fd3c10482f1f3dc8ac80a4eddeaa5623d6e1ec36b5d7edd8ce572&ipo=images";

	return (
		<div className="profile-picture">
			<img src={imageLink} alt="" />
		</div>
	);
}
