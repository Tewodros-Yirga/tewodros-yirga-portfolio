import React, { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import CountUp from "react-countup";
import "./styles.scss";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillsData = [
    {
      label: "FULL STACK ",
      data: [
        {
          skillName: "HTML, CSS & JAVASCRIPT",
          percentage: 95,
        },
        {
          skillName: "REACT.JS",
          percentage: 90,
        },
        {
          skillName: "NODE.JS",
          percentage: 85,
        },
        {
          skillName: "EXPRESS.JS",
          percentage: 80,
        },
        {
          skillName: "PHP",
          percentage: 75,
        },
      ],
    },
    {
      label: "DATABASES",
      data: [
        {
          skillName: "SQL",
          percentage: 85,
        },
        {
          skillName: "MYSQL",
          percentage: 90,
        },
        {
          skillName: "MONGODB",
          percentage: 80,
        },
        {
          skillName: "FIREBASE",
          percentage: 75,
        },
      ],
    },
    {
      label: "PROGRAMMING LANGUAGES",
      data: [
        {
          skillName: "PYTHON",
          percentage: 85,
        },
        {
          skillName: "JAVA",
          percentage: 80,
        },
        {
          skillName: "C++",
          percentage: 90,
        },
        {
          skillName: "C# (.NET)",
          percentage: 70,
        },
      ],
    },
    {
      label: "OTHER SKILLS",
      data: [
        {
          skillName: "DRONE DEVELOPMENT (HARDWARE/SOFTWARE)",
          percentage: 85,
        },
        {
          skillName: "GIT & VERSION CONTROL",
          percentage: 90,
        },
        {
          skillName: "PROBLEM SOLVING",
          percentage: 95,
        },
        {
          skillName: "SOFTWARE DEPLOYMENT",
          percentage: 80,
        },
      ],
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<BsInfoCircleFill size={40} className="fill-accent" />} />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={4}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <div className="progress-bar">
                        <div
                          className="filling-bar"
                          style={{
                            width: isVisible ? `${skillItem.percentage}%` : 0,
                          }}
                        />
                      </div>
                      {isVisible && (
                        <CountUp
                          start={0}
                          end={skillItem.percentage}
                          duration={7} // Increase the duration for slower counting
                          suffix="%"
                          style={{ fontSize: "24px" }}
                        />
                      )}
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;