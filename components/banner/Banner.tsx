import LeftSide from "./LeftSide";

const Banner = () => {
  return (
    <section
      id="about"
      className="w-full pt-4 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-gray-600"
    >
      <LeftSide />
    </section>
  );
};

export default Banner;
