import { useEffect } from "react";
import { useRoot } from "../const";
import "./home.css";
import homeIcon from "../assets/home-100.png";
import mailIcon from "../assets/mail-100.png";
import githubIcon from "../assets/github-100.png";
import linkedinIcon from "../assets/linkedin-100.png";

function Header() {
	return (
		<div className="header">
			<h2>Evan Garcia</h2>
			<nav>
				<button style={{ marginLeft: "0" }}>
					<a href="">
						<img src={homeIcon} alt="home" />
					</a>
				</button>
				<button>
					<a href="mailto:evanglopez511@gmail.com">
						<img src={mailIcon} alt="mail" />
					</a>
				</button>
				<button>
					<a href="https://www.linkedin.com/in/evangarcialopez/">
						<img src={linkedinIcon} alt="linkedin" />
					</a>
				</button>
				<button>
					<a href="https://github.com/EvanGarciaL">
						<img src={githubIcon} alt="github" />
					</a>
				</button>
			</nav>
		</div>
	);
}

function Sections() {
	useRoot("rootEnd");
	return (
		<div id="content">
			<About/>
			<Skills/>
		</div>
	);
}

function About() {
	return(
		<div id="aboutText">
			<h2 style={{ fontFamily: "Fira Code" }}>{">>"} about</h2>
			<p>
				{" "}
				Computer Science @ UCI.{" "}
				<b>Obsessed with problem solving and tinkering with stuff.</b>{" "}
				<br></br>
				This website is one such example — learning react / javascript /
				typescript to learn other frameworks and better develop API's.
				Currently interested in <i>machine learning,</i>{" "}
				<i>competitive programming,</i> <i>AI,</i> and{" "}
				<i>fullstack development.</i>
			</p>

			<p>
				{" "}
				I also really like hackathons. {"<"}- (Problem Solving + Tinkering —
				already won one!)
			</p>

			<p>Might also minor in Mathematics 🫡 (😥) </p>
		</div>
	);
}

function Skills() {
	return(
		<div id="skillsText" >
			<h2>
				{">>"} skills
			</h2>

			<ul>
				<li>Python</li>
				<li>Javascript/TypeScript</li>
				<li>React</li>
				<li>C/C++</li>
				<li>...</li>
			</ul>
		</div>
 )
}


function Footer() {
	return (
		<footer className="footer">
			<p>
				Icons by{" "}
				<a target="_blank" href="https://icons8.com/">
					Icons8
				</a>
			</p>
		</footer>
	);
}

export default function Home() {
	useEffect(() => {
		document.body.classList.add("Home");
		document.title = "Evan's Website";

		return () => {
			document.body.classList.remove("Home");
			document.title = "";
		};
	}, []);

	return (
		<>
			<Header />
			<Sections />
			<Footer />
		</>
	);
}
