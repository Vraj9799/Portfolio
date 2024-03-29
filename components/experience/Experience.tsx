"use client";

import { workExperiences } from "@/data";
import Title from "../common/Title";
import ExperienceCard from "./ExperienceCard";
const Experience = () => {

  const getExperience = () => {
    const today = new Date();
    const startDate = new Date(2020, 10, 28); 
    const differenceInMilliseconds = today.getTime() - startDate.getTime();
    const yearsOfExperience = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    return yearsOfExperience.toFixed(1);
  };
  return (
    <>
      <section
        id="experience"
        className="w-full py-20 border-b-[1px] border-b-gray-600"
      >
        <div className="flex justify-center items-center text-center">
          <Title title={`${getExperience()} YEARS OF EXPERIENCE`} des="Work Experience" />
        </div>
        <div className="pb-12 font-titleFont flex gap-20 px-5">
          <div className="mt-2 w-full h-fit border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {workExperiences.map(
              ({ _id, title, subTitle, location, description }) => (
                <ExperienceCard
                  key={_id}
                  title={title}
                  subTitle={subTitle}
                  location={location}
                  description={description}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
