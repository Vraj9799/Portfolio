const Footer = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {new Date().getFullYear()}. Built by Vraj Shah
        <br />
        Design Motivation from{" "}
        <a
          href="https://github.com/noorjsdivs/youtubeportfolio"
          target="_blank"
          rel="noopener"
        >
          Noor Mohammad
        </a>
      </p>
    </div>
  );
};

export default Footer;
