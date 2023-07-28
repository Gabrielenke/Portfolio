import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { useState } from 'react';
import {
  darkMode,
  hamburger,
  language,
  lightMode,
} from '../images/Icons/export';

const CustomLink = ({ href, title, className = '' }) => {
  const locationUrl = useLocation();
  return (
    <Link to={href} className={`${className} group relative `}>
      {title}

      <span
        className={`ease absolute  -bottom-1.5 left-0 inline-block h-[2px]
        bg-dark transition-[width] duration-300 group-hover:w-full ${
          locationUrl.pathname === href ? ' w-full' : 'w-0'
        } dark:bg-light`}
      >
        {''}
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
    <header className="mb-5  flex w-full items-center justify-between px-32 py-8 font-medium ">
      <nav className="absolute left-0 ml-4 text-dark dark:text-light md:hidden ">
        <Link to="/" className=" text-2xl ">
          {'<Gabrielenke />'}
        </Link>
      </nav>
      <button
        onClick={handleClick}
        className="absolute right-0 z-50 w-10 items-center md:hidden  "
      >
        {isOpen ? (
          <svg
            className="h-10 w-10 text-dark dark:text-light"
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
        className={`fixed left-1/2  top-1/2 z-30  flex min-w-[70vw] flex-col items-center justify-between transition-all duration-300  ease-in-out md:static md:w-full
			  md:translate-x-0 md:translate-y-0 md:flex-row md:py-0
				${
          isOpen
            ? ' -translate-x-1/2 -translate-y-1/2 rounded-lg bg-dark/90 py-32 text-light backdrop-blur-sm dark:bg-light/75 dark:text-dark  '
            : '-translate-x-[150vw] -translate-y-1/2 text-dark dark:text-light'
        }
				 `}
      >
        <nav className=" mb-10 hidden flex-col items-center justify-center gap-10 px-4 text-center md:mb-0 md:flex ">
          <Link to="/" className="text-2xl ">
            {'<Gabrielenke />'}
          </Link>
        </nav>

        <nav className="flex flex-col items-center justify-center gap-10 md:flex-row  ">
          <CustomLink href="/" title="Home"></CustomLink>
          <CustomLink href="/about" title="About"></CustomLink>
          <CustomLink href="/projects" title="Projects"></CustomLink>
          <CustomLink href="/skills" title="Skills"></CustomLink>
          <div className="flex gap-6">
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={` flex items-center justify-center   ${
                mode === 'light' ? 'text-dark' : 'text-light'
              } `}
            >
              {mode === 'dark' ? (
                <img className="" src={lightMode} alt="" />
              ) : (
                <img className="invert" src={darkMode} alt="" />
              )}
            </button>
            <motion.a href="/" whileHover={{ y: -2 }} className="">
              <img className="w-8 invert dark:invert-0" src={language} alt="" />
            </motion.a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
