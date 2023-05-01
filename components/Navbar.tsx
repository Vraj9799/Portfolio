"use client";

import { navLinks } from "@/data";
import * as Scroll from "react-scroll";
const Navbar = () => {
  return (
    <>
      <div className="w-full h-24 sticky top-0 z-50 bg-body mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
        <div>VS</div>
        <div>
          <ul className="flex items-center gap-10">
            {navLinks.map(({ _id, title, link }) => (
              <li
                key={_id}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              >
                <Scroll.Link
                  to={link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Scroll.Link>
              </li>
            ))}
            <li className="border border-designColor rounded-md px-4 py-2">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
