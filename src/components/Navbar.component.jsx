import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import GithubImg from '../imgs/github.gif';

import Logo from '../imgs/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="navbar">
        <nav className="grid gap-4">
          <div className="hidden md:flex items-center justify-between space-x-2 text-2xl p-4">
            <div className=" animate-[slideRight_1s_ease-in-out]">
              <Link to="/" onClick={() => handleLinkClick("/")}>
                <span className={`font-semibold ${activeLink === "/" && "text-purple"} hover:opacity-70 duration-300`}>
                  <img src={Logo} className="" width={80}/>
                </span>
              </Link>
            </div>
            <div className=" animate-[slideTop_1s_ease-in-out] hidden md:flex items-center gap-4 justify-center space-x-2 text-2xl">
              <Link to="/" onClick={() => handleLinkClick("/")}>
                <span className={`font-semibold ${activeLink === "/" && "text-purple"} hover:text-purple duration-300`}>Home</span>
              </Link>
              <Link to="/about" onClick={() => handleLinkClick("/about")}>
                <span className={`font-semibold ${activeLink === "/about" && "text-purple"} hover:text-purple duration-300`}>About Me</span>
              </Link>
              <Link to="/skills" onClick={() => handleLinkClick("/skills")}>
                <span className={`font-semibold ${activeLink === "/skills" && "text-purple"} hover:text-purple duration-300`}>Skills</span>
              </Link>
              <Link to="/projects" onClick={() => handleLinkClick("/projects")}>
                <span className={`font-semibold ${activeLink === "/projects" && "text-purple"} hover:text-purple duration-300`}>Projects</span>
              </Link>
              <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
                <span className={`font-semibold ${activeLink === "/contact" && "text-purple"} hover:text-purple duration-300`}>Contact Me</span>
              </Link>
            </div>
            <div className=" animate-[slideLeft_1s_ease-in-out]">
              <a href="https://github.com/Goutam96801" target="_blank">
                <span className="font-semibold flex flex-row items-center gap-2 hover:text-purple duration-300">
                  <img src={GithubImg} className="w-8 h-8 rounded-full"/>
                  Github</span>
              </a>
            </div>
          </div>
          <div className="md:hidden mx-4 my-2 flex items-center justify-between">
            <div>
              <Link to="/" onClick={() => handleLinkClick("/")}>
                <span className="font-semibold">Goutam</span>
              </Link>
            </div>
            <button
              className="justify-center "
              style={{ background: "transparent" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fi fi-br-bars-staggered text-3xl animate-[slideBottom_1s_ease-in-out]"></i>
            </button>
            {isMenuOpen && (
              <div className=" mx-2 absolute top-12 right-0 bg-transparent p-4 border border-gray-300 rounded-lg shadow-md">
                <div className="flex flex-col gap-2">
                  <Link to="/" onClick={() => handleLinkClick("/")}>
                    <span className={`inline-flex items-center font-semibold space-x-2 ${activeLink === "/" && "text-purple"}`}>
                      <i className="fi fi-rr-home w-4 h-4 mr-2"></i>
                      Home
                    </span>
                  </Link>

                  <Link to="/about" onClick={() => handleLinkClick("/about")}>
                    <span className={`inline-flex items-center font-semibold space-x-2 ${activeLink === "/about" && "text-purple"}`}>
                      <i className="fi fi-rr-user w-4 h-4 mr-2"></i>
                      About Me
                    </span>
                  </Link>
                  <Link to="/skills" onClick={() => handleLinkClick("/skills")}>
                    <span className={`inline-flex items-center font-semibold space-x-2 ${activeLink === "/skills" && "text-purple"}`}>
                      <i className="fi fi-rr-book-alt w-4 h-4 mr-2"></i>
                      Skills
                    </span>
                  </Link>
                  <Link to="/projects" onClick={() => handleLinkClick("/projects")}>
                    <span className={`inline-flex items-center font-semibold space-x-2 ${activeLink === "/projects" && "text-purple"}`}>
                      <i className="fi fi-rr-cube w-4 h-4 mr-2"></i>
                      Projects
                    </span>
                  </Link>

                  <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
                    <span className={`inline-flex items-center font-semibold space-x-2 ${activeLink === "/contact" && "text-purple"}`}>
                      <i className="fi fi-rr-messages w-4 h-4 mr-2"></i>
                      Contact Me
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
