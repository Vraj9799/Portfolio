"use client";
import { FaCode, FaGithub, FaHackerrank, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const LeftSide = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Problem Solver.", "Scrum Master."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <>
      <div className="w-full flex flex-col gap-10 px-5 pt-5 xl:px-0">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal uppercase">
            WELCOME TO MY PORTFOLIO!
          </h4>
          <h1 className="text-5xl font-bold text-white">
            Hi, I&apos;m{" "}
            <span className="text-designColor capitalize">Vraj Shah</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking={true}
              cursorStyle="_"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I&apos;m a software developer with a passion for coding and a love
            for debugging. I&apos;m a team player who thrives in collaborative
            environments and always eager to take on new challenges. I&apos;m
            always seeking new opportunities to level up my skills and make the
            digital world a better place, one line of code at a time.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between pt-0">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex flex-wrap gap-4">
              {profiles.map((profile, index) => (
                <span className="bannerIcon" key={index}>
                  <a href={profile.href} target="_blank" rel="noreferrer">
                    {profile.icon}
                  </a>
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Best Skill
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <span className="skillIcon" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const profiles = [
  {
    href: "http://www.linkedin.com/in/vrajshah97",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.leetcode.com/vraj8725",
    icon: <SiLeetcode />,
  },
  {
    href: "https://www.github.com/vraj9799",
    icon: <FaGithub />,
  },
  {
    href: "http://hackerrank.com/vraj9799",
    icon: <FaHackerrank />,
  },
  {
    href: "https://www.scaler.com/academy/profile/37b5904940b0/",
    icon: <FaCode />,
  },
];

const skills = [
  "JavaScript",
  "C#",
  "ASP.NET Core",
  "Java",
  "Spring Boot",
  "SQL",
];

export default LeftSide;
