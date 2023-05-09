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
          <h1 className="text-5xl font-bold text-white">
            Hi, I&apos;m{" "}
            <span className="text-designColor capitalize">Vraj Shah</span>
          </h1>
          <h2 className="text-4xl font-bold text-white h-[80px] md:h-auto">
            a <span>{text}</span>
            <Cursor
              cursorBlinking={true}
              cursorStyle="_"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
            I&apos;m a Software Developer with a passion for creating innovative
            and functional web applications that make a difference in
            people&apos;s lives. My journey as a developer began when I
            discovered the power of technology to transform ideas into reality,
            and I&apos;ve been hooked ever since. I&apos;m a team player who
            thrives in collaborative environments and always eager to take on
            new challenges. I&apos;m always seeking new opportunities to level
            up my skills and make the digital world a better place, one line of
            code at a time.
            <br />
            <br />
            What sets me apart from other developers is my multidisciplinary
            approach to problem-solving. With a background in design and a deep
            understanding of user experience, I&apos;m able to create seamless
            and intuitive interfaces that engage users and keep them coming back
            for more. At the same time, I have a keen eye for detail and a
            strong understanding of the underlying technology, enabling me to
            build robust and scalable solutions that stand the test of time.
            <br />
            <br />I love working with business and collaborators to bring their
            ideas to life, and I&apos;m always looking for new opportunities to
            learn and grow as a developer.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between pt-0">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me at
            </h2>
            <div className="flex flex-wrap gap-4">
              {profiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bannerIcon">{profile.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Best skills
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
