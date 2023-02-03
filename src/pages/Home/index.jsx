import styles from "./style.module.css";

export default function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.description}>
				<p>
					Hello, everyone! My name is <b>Hícaro Dânrlley</b> and I'm a{" "}
					<b>Computer Science student </b>
					and a <b>software developer</b>. I started my journey in coding two
					years ago with C programming language. Ever since, I've been writing
					software in multiple programming languages, such as Python, Dart, Go,
					JavaScript and more.
				</p>
				<br></br>
				<p>
					At first, I wanted to be a lawyer, but a great friend of mine told me
					about a Harvard course called{" "}
					<a href="https://www.edx.org/cs50">CS50</a> and that changed my life
					forever (Thanks, Alice). I also want to appreciate my best friends:
					Pedro, Isadora and my cousin Alícia, life is so much better with you
					all. And most importantly, I love you, mom, I will dedicate my whole
					life just to make you proud of me.
				</p>
				<br></br>
			</div>

			<img
				src="https://i.ibb.co/YDD4mmY/Whats-App-Image-2023-01-28-at-11-50-09.jpg"
				alt=""
			/>
		</div>
	);
}
