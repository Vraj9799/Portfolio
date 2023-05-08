import Title from "../common/Title";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="w-full py-20 border-b-[1px] border-b-gray-600"
      >
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="GET IN TOUCH" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-center rounded-lg shadow-shadowOne p-20 bg-gradient-to-r from-bodyColor to-[#202327] group transition-colors duration-1000">
          <h3 className="text-3xl font-bold text-white">Vraj Shah</h3>
          <p className="text-lg font-normal text-designColor">
            Full Stack Developer
          </p>
          <p className="text-base text-gray-400 tracking-wide">
            Hello, Thank you for taking time to visit my portfolio! So if
            you&apos;re looking for a versatile and passionate Full Stack
            Developer to take your project to the next level, look no further.
            Let&apos;s build something amazing together&#33;
          </p>
          <p className="text-base text-md text-gray-400 flex items-center gap-2">
            Phone:{" "}
            <span className="text-lightText">
              <a href="tel:+917600340770">+91 7600340770</a>
            </span>
          </p>
          <p className="text-base text-md text-gray-400 flex items-center gap-2">
            Email:{" "}
            <span className="text-lightText">
              <a href="mailto:vrajshah363@gmail.com">vrajshah363@gmail.com</a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
