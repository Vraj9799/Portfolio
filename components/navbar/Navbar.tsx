"use client";

import { navLinks } from "@/data";
import { motion } from "framer-motion";
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
        <div className="h-100 w-100 rounded-sm">
          <Image
            src={"/assets/VRAJ SHAH.png"}
            alt="Vraj Shah"
            width={50}
            height={50}
            color="white"
            style={{
              borderRadius: "50px",
            }}
          />
        </div>
        <div>
          <NavList
            extraClass={`hidden mdl:inline-flex items-center gap-6 lg:gap-10`}
            handleClick={() => setShowMenu(false)}
          />
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[100%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
              <div className="flex flex-col gap-8 py-2 relative">
                <div>
                  {/* Logo */}
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    className="text-xl text-gray-400 mt-2"
                  >
                    Hi, I&apos;m{" "}
                    <span className="text-designColor">Vraj Shah</span>
                  </motion.h2>
                </div>
                <NavList
                  extraClass={`flex justify-center items-center flex-col gap-4`}
                  handleClick={() => setShowMenu(false)}
                />
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
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
  handleClick,
}: {
  extraClass: string;
  handleClick: () => void;
}) => {
  return (
    <ul className={extraClass}>
      {navLinks.map(({ _id, title, link }) => (
        <li
          key={_id}
          className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          <Link
            to={link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onClick={() => handleClick()}
          >
            {title}
          </Link>
        </li>
      ))}
      <li className="border w-fit border-designColor rounded-md px-4 py-2">
        <a
          href="https://drive.google.com/file/d/1Vw1sYzWi3f83_pMF6c2zaqbl3UKuo7u-/view?usp=share_link"
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
