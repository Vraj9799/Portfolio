"use client";

import { navLinks, resumeLink } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4 md:px-10">
        <div className="h-100 w-100 cursor-pointer">
          <Link
            to={"about"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            <Image
              src={"/assets/vs-logo.png"}
              alt="Vraj Shah"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div>
          <NavList
            extraClass={`hidden mdl:inline-flex items-center gap-6 lg:gap-10`}
            navItemtext="text-base"
            handleClick={() => setShowMenu(false)}
          />
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide mdl:hidden">
              <div className="flex flex-col gap-8 pt-2 cursor-pointer">
                <Link
                  to={"about"}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                >
                  <Image
                    src={"/assets/vs-mobile-logo.png"}
                    alt="Vraj Shah"
                    width={150}
                    height={150}
                  />
                </Link>
                <NavList
                  extraClass={`flex flex-col gap-4`}
                  navItemtext="text-base text-xl"
                  handleClick={() => setShowMenu(false)}
                />
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-10 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const NavList = ({
  extraClass,
  navItemtext,
  handleClick,
}: {
  extraClass: string;
  navItemtext: string;
  handleClick: () => void;
}) => {
  return (
    <ul className={extraClass}>
      {navLinks.map(({ _id, title, link }) => (
        <li
          key={_id}
          className={`${navItemtext} font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300`}
        >
          <Link
            to={link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            onClick={() => handleClick()}
          >
            {title}
          </Link>
        </li>
      ))}
      <li className="border w-fit border-designColor rounded-md px-4 py-2">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          Resume
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
