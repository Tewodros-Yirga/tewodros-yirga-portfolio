import { FiDownload } from "react-icons/fi";
import Social from "./Social";
import Photo from "./Photo";
import "./styles.scss";

import cvPDF from "./TwodrosYirgaResume.pdf"; // Import the PDF file


const Home = () => {

    // Handle CV download
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = cvPDF;
      link.setAttribute("download", "TwodrosYirgaResume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.open(cvPDF, "_blank");
    };
  return (
    <section id="home" className="home">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Side */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              Hello, I'm <br />{" "}
              <span className="text-accent">Tewodros Yirga</span>
            </h1>
            <h3 className="h3 h3im">
              I'm a{" "}
              <span style={{ "--i": 4 }} data-text="Full-Stack Developer">
                Full-Stack Developer
              </span>
              <span style={{ "--i": 3 }} data-text="IoT Developer">
                IoT Developer
              </span>
              <span style={{ "--i": 2 }} data-text="Drone Enthusiast">
                Drone Enthusiast
              </span>
              <span style={{ "--i": 1 }} data-text="Lifelong Learner">
                Lifelong Learner
              </span>
            </h3>
            <p className="max-w-[500px] mb-9 text-white/80 xl:text-[14px] ">
              {" "}
              I specialize in creating seamless and innovative digital
              solutions, combining my expertise in full-stack development,
              hardware-software integration, and user-centric design. Proficient
              in a wide range of technologies, I bring a versatile skill set to
              every project. My passion lies in solving complex problems and
              delivering elegant, functional, and impactful digital experiences.{" "}
            </p>
            {/* Buttons & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Download CV Button */}
              <button onClick={handleDownload} className="xl:text-[14px] uppercase flex items-center gap-2 px-6 py-3 xl:px-8 xl:py-4 border border-accent rounded-full text-white hover:bg-accent hover:text-primary transition-all duration-500">
                <span>Download CV</span>
                <FiDownload className="text-xl xl:text-4xl" />
              </button>
              {/* Social Icons */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 xl:w-[44px] xl:h-[44px] border border-accent rounded-full flex justify-center items-center text-accent text-base xl:text-5xl hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Right Side (Photo) */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
