import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
        </div>
      </div>
    </>
  );
}
