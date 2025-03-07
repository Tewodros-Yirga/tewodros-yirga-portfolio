import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev, FaCode } from "react-icons/fa";
import { SiPytorch, SiBlockchaindotcom } from "react-icons/si";
import nebaImage from "../../images/rested2rem (1).png"; // Import the image

const personalDetails = [
  {
    label: "Name:",
    value: "Tewodros Yirga",
  },
  {
    label: "Age:",
    value: "23",
  },
  {
    label: "Address:",
    value: "Ethiopia, Bahr dar",
  },
  {
    label: "Email:",
    value: "tewodrosy21@gmail.com",
  },
  {
    label: "Contact No:",
    value: "+251955179500",
  },
];

const jobSummary =
  "My journey in computer science began at Debre Tabor University, where I graduated with honors, ranking 1st in the Gafat Institute of Technology. Throughout my academic career, I developed a strong foundation in programming and software development, which led me to specialize in full-stack web development and emerging technologies.\n" +
  "I have hands-on experience with multiple programming languages, including C++, Java, and JavaScript, along with expertise in frameworks like ReactJS, NodeJS, and Express. My final-year project, a 'Drone Delivery Service' system, showcased my ability to integrate hardware with software, demonstrating my problem-solving skills and innovative mindset.\n" +
  "Beyond my academic achievements, I am passionate about AI, Blockchain, and cutting-edge technologies that shape the future. I firmly believe that 'The best way to predict the future is to create it,' and I am committed to using my skills to build impactful solutions that drive technological advancements.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} className="fill-accent" />} />

      <div className="about__content">
        {/* Image and Header Side by Side */}
        <div className="about__content__topWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__topWrapper__image">
              <img src={nebaImage} alt="Tewodros Yirga" className="about__image mt-4 rounded-xl " />
            </div>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__topWrapper__header">
              <h3>Embarking on the Journey of Development Mastery</h3>
              {jobSummary.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Animate>
        </div>

        {/* Personal Information at the Bottom */}
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(500px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >
          <div className="about__content__personalWrapper">
            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default About;