import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
