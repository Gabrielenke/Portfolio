import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkedInIcon, GithubIcon, SunIcon, MoonIcon } from "./Icons";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";
import { hamburger } from "../images/Icons/export";

const CustomLink = ({ href, title, className = "" }) => {
	const locationUrl = useLocation();
	return (
		<Link to={href} className={`${className} relative group `}>
			{title}

			<span
				className={`h-[2px] inline-block  bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
					locationUrl.pathname === href ? " w-full" : "w-0"
				} dark:bg-light`}
			>
				{""}
			</span>
		</Link>
	);
};

const NavBar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between ">
			<button
				onClick={handleClick}
				className="absolute left-0 w-10 items-center md:hidden   "
			>
				{isOpen ? (
					<svg
						className="w-10 h-10 text-dark dark:text-light"
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 352 512"
						aria-hidden="true"
						focusable="false"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
					</svg>
				) : (
					<img src={hamburger} alt="" />
				)}
			</button>

			<div
				className={`min-w-[70vw] md:w-full  flex-col md:flex-row  fixed md:static md:translate-x-0 md:translate-y-0 transition-all ease-in-out duration-300  top-1/2 left-1/2 z-30 
			  flex justify-between items-center md:py-0
				${
					isOpen
						? " rounded-lg py-32 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm bg-dark/90 dark:bg-light/75 text-light dark:text-dark  "
						: "-translate-x-[105vw] -translate-y-1/2 text-dark dark:text-light"
				}
				 `}
			>
				<nav className=" flex flex-col md:flex-row  px-4 gap-10   justify-center text-center items-center mb-10 md:mb-0">
					<CustomLink href="/" title="Home"></CustomLink>
					<CustomLink href="/about" title="About"></CustomLink>
					<CustomLink href="/projects" title="Projects"></CustomLink>
				</nav>

				<nav className="flex items-center justify-center gap-4 ">
					<motion.a href="" whileHover={{ y: -2 }} className="w-10">
						<GithubIcon
							className={` ${isOpen ? "" : "text-dark dark:text-light"}`}
						/>
					</motion.a>
					<motion.a href="/" whileHover={{ y: -2 }} className="w-10">
						<LinkedInIcon className="" />
					</motion.a>

					<button
						onClick={() => setMode(mode === "light" ? "dark" : "light")}
						className={` flex items-center justify-center rounded-full p-1  w-10 ${
							mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
						} `}
					>
						{mode === "dark" ? (
							<SunIcon className={"fill-dark"} />
						) : (
							<MoonIcon className={"fill-dark"} />
						)}
					</button>
				</nav>
			</div>

			<div className="absolute left-[50%] top-2 translate-x-[-50%] ">
				<Logo />
			</div>
		</header>
	);
};

export default NavBar;
