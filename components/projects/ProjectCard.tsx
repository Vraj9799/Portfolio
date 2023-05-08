import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({
  title,
  des,
  src,
  githubLink,
  websiteLink,
}: {
  title: string;
  des: string;
  src?: string;
  githubLink?: string;
  websiteLink?: string;
}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors hover:scale-105 duration-500 hover:transition hover:ease-in-out">
      {src && (
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <Image
            className="w-full object-cover"
            src={src}
            alt="src"
            height={240}
            width={240}
          />
        </div>
      )}
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl capitalize text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </span>
                </a>
              )}
              {websiteLink && (
                <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              )}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
