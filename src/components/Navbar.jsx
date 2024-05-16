import React, { useState } from 'react'
import { styles } from '../styles';
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';
import { logo, menu, close } from "../assets";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const handleResumeClick = () => {
  window.open('/resume.pdf', '_blank');
};

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Amin Khan &nbsp;
            <span
            // className="sm:block hidden"
            >
              | Web Developer
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-6">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
          <li
            className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer cursor-pointer`"
            onClick={handleResumeClick}
          >
            Resume
          </li>
          <li>
              <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-secondary hover:text-white text-[28px]' />
              </a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/your-linkedin-username/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-secondary hover:text-white text-[28px]' />
              </a>
              
            </li>
            
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <li
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer cursor-pointer`"
                onClick={handleResumeClick}
              >
                Resume
              </li>
              <li className="flex gap-4 ">
              <a href="https://github.com/aminkhan111" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-secondary hover:text-white text-[29px]' />
              </a>
              
              <li>
              <a href="https://www.linkedin.com/in/abdul-amin-khan-111hit/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-secondary hover:text-white text-[29px]' />
              </a>
              
            </li>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

