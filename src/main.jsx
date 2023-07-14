import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<main className="bg-light dark:bg-dark w-full min-h-screen">
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</main>
		</BrowserRouter>
	</React.StrictMode>,
);
