import graduationImage from "../../images/graduation-dtu.png";
import internshipImage from "../../images/internship.jpg";
import highschoolImage from "../../images/highschoo.jpg";
import droneProjectImage from "../../images/drone-delivery-project.png";
import elementaryImage from "../../images/elementary.jpg";

export const data = {
  education: [
    {
      title: "Bachelor of Science in Computer Science",
      image: graduationImage,
      subTitle: "Debre Tabor University, Gafat Institute of Technology",
      description: "July 2021 - February 2025 | Debre Tabor, Ethiopia",
      hoverDescription:
        "I graduated with honors, achieving a CGPA of 3.98 and ranking 1st in my institute. My coursework covered a wide range of computer science disciplines, including programming, algorithms, data structures, software engineering, and database systems. This academic journey equipped me with a strong technical foundation and a passion for solving real-world problems through innovation.",
    },
    {
      title: "Higher Secondary Education",
      image: highschoolImage,
      subTitle: "Amanuel Higher Secondary and Preparatory School",
      description: "Natural Science | Grade 9 - Grade 12",
      hoverDescription:
        "I completed my higher secondary education at Amanuel Higher Secondary and Preparatory School, specializing in Natural Science. This program provided me with a solid foundation in scientific principles and critical thinking, which have been instrumental in my academic and professional growth.",
    },
    {
      title: "Elementary Education",
      image: elementaryImage,
      subTitle: "Amanuel Number 1 Elementary School",
      description: "Elementary Education",
      hoverDescription:
        "I attended Amanuel Number 1 Elementary School, where I built a strong educational foundation that set the stage for my future academic achievements.",
    },
  ],

  experience: [
    {
      title: "Drone Delivery Service Project",
      image: droneProjectImage,
      subTitle: "Final Year Project",
      description: "Hardware & Software Development | Debre Tabor University",
      hoverDescription:
        "For my final year project, I designed and built a functional drone capable of autonomous item delivery. The project involved integrating hardware components (motors, sensors, GPS) with software systems for navigation and control. Additionally, I developed a user-friendly website to facilitate interaction with the drone system, enabling features like order tracking and delivery scheduling. This project showcased my ability to combine hardware and software skills to solve real-world problems.",
    },
    {
      title: "Internship - Database Administration",
      image: internshipImage,
      subTitle: "Amhara Industry Parks Development Corporation (AIPDC)",
      description: "Bahir Dar, Ethiopia | Mentored by Database Administrator",
      hoverDescription:
        "During my internship at AIPDC, I worked under the guidance of the Database Administrator, gaining hands-on experience in database management and administration. I contributed to projects involving data organization, optimization, and security, which enhanced my technical skills and understanding of real-world database systems.",
    },
  ],

  achievements: [
    {
      title: "Graduated with Honors",
      description: "Ranked 1st in Gafat Institute of Technology",
      hoverDescription:
        "I graduated with a CGPA of 3.98, earning the distinction of being the top student in my institute. This achievement reflects my dedication, hard work, and commitment to academic excellence.",
    },
  ],
};