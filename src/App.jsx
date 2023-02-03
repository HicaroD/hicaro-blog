import { Routes, Route } from "react-router-dom";
import "./assets/global.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home/index";
import Projects from "./pages/Projects/index";
import Contact from "./pages/Contact/index";

export default function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}
