import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Skill from "@/components/skills/Skill";

export default function Home() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Experience />
          <Skill />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
