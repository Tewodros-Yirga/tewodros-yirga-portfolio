import React, { useEffect } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import "./styles.scss";
import { MdWork, MdSchool, MdStar } from "react-icons/md";

const Resume = () => {
  const cvPDF = "/pdf/TwodrosYirgaResume.pdf";

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

  // Smooth scroll to Resume section
  // useEffect(() => {
  //   const handleSmoothScroll = () => {
  //     const resumeSection = document.getElementById("resume");
  //     if (resumeSection) {
  //       resumeSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   handleSmoothScroll();
  // }, []);

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40}  className="fill-accent"/>}
      />

      {/* Timeline Section */}
      <div className="timeline">
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline layout={"1-column"} lineColor="#00ff99">
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  border: "2px solid #00ff99",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                contentArrowStyle={{ borderRight: "7px solid #00ff99" }}
                icon={<MdSchool />}
                iconStyle={{
                  background: "#1c1c22",
                  color: "#00ff99",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="timeline__experience__vertical-timeline-element__image"
                />
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
                <div className="hover-description">{item.hoverDescription}</div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline layout={"1-column"} lineColor="#00ff99">
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  border: "2px solid #00ff99",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                contentArrowStyle={{ borderRight: "7px solid #00ff99" }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#1c1c22",
                  color: "#00ff99",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="timeline__experience__vertical-timeline-element__image"
                />
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
                <div className="hover-description">{item.hoverDescription}</div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__achievements">
          <h3 className="timeline__achievements__header-text">Achievements</h3>
          <VerticalTimeline layout={"1-column"} lineColor="#00ff99">
            {data.achievements.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__achievements__vertical-timeline-element"
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  border: "2px solid #00ff99",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                contentArrowStyle={{ borderRight: "7px solid #00ff99" }}
                icon={<MdStar />} // Changed icon to represent achievements
                iconStyle={{
                  background: "#1c1c22",
                  color: "#00ff99",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
                <div className="hover-description">{item.hoverDescription}</div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Skill Bars Section */}
      <div className="skill-bars">
        {[
          { name: "JavaScript", level: 90 },
          { name: "React", level: 85 },
          { name: "Node.js", level: 80 },
          { name: "TailwindCSS", level: 75 },
        ].map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-name">{skill.name}</div>
            <div
              className="skill-level"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="resume__cv">
        <button onClick={handleDownload} aria-label="Download CV" className="download-button">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Resume;
