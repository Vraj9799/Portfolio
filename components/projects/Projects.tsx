import { projectsData } from "@/data";
import Title from "../common/Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="w-full py-20 border-b-[1px] border-b-gray-600 px-4"
      >
        <div className="flex justify-center items-center text-center">
          <Title des="My Projects" />
        </div>
        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            {projectsData.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.title}
                des={item.des}
                src={item.src}
                githubLink={item.githubLink}
                websiteLink={item.websiteLink}
              />
            ))}
          </div>
        ) : (
          <h3 className="text-lg text-designColor text-center">
            Projects will be added soon.
          </h3>
        )}
      </section>
    </>
  );
};

export default Projects;
