import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import WorkSliderBtns from "./WorkSliderBtns";
import "swiper/css";
import { BsArrowUpRight, BsGithub, BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { Link } from "react-router-dom";

const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "Drone Delivery Service (DDS)",
    description:
      "DDS is an innovative web platform that enables users to request deliveries via autonomous drones. Built with the MERN stack, it ensures seamless order placement, real-time tracking, and efficient delivery management. The system is designed to revolutionize last-mile logistics with cutting-edge technology.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Tailwind CSS" }
    ],
    image: "/src/images/homepagedelivery.png",
    live: "", 
    github: "", 
  },  
  {
    num: "02",
    category: "Full-Stack",
    title: "Dream University Website",
    description:
      "A fully functional university website designed for Dream University, providing essential features like course listings, student registration, faculty management, and an interactive user experience. Built with PHP and MySQL for dynamic content management, and styled with HTML, CSS, and JavaScript for a modern and responsive design.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "XAMPP (Apache & MySQL)" }
    ],
    image: "/src/images/universityweb2.png",
    live: "", 
    github: "",
  },
  
  {
    num: "03",
    category: "Full-Stack",
    title: "Admin Panel Management System",
    description:
      "A robust and user-friendly admin panel designed for efficient management of various system modules. This full-stack application provides role-based access control, real-time data visualization, user management, and operational analytics. Built for seamless administration with a modern UI and secure backend architecture.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Tailwind CSS" }
    ],
    image: "/src/images/admin.png",
    live: "", 
    github: "",
  },
  {
    num: "04",
    category: "Full-Stack",
    title: "Drone Pilot Dashboard",
    description:
      "An advanced web application designed for drone pilots to monitor and control quadcopters in real time. Features include live drone tracking, real-time camera feed, telemetry data visualization, and mission management. Integrated with a self-built drone, this platform provides seamless communication between the pilot and the UAV for enhanced control and situational awareness.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "WebSockets" }
    ],
    image: "/src/images/pilot.png",
    live: "", 
    github: "",
  },  
  {
    num: "05",
    category: "Frontend",
    title: "Flytrex Maps Clone",
    description:
      "A frontend clone of the Flytrex website's map section, designed to replicate its user interface and functionality. Built with React and Tailwind CSS, this project integrates OpenStreetMap for interactive mapping, providing a seamless experience for visualizing drone delivery routes and tracking locations in real time.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "OpenStreetMap" }
    ],
    image: "/src/images/deliveryzones.png",
    live: "", // Add live URL if available
    github: "", // Add GitHub repo link if available
  },  
  {
    num: "06",
    category: "Embedded Systems",
    title: "Flight Controller Package",
    description:
      "A comprehensive flight controller package designed using Arduino IDE, offering four key components: flight controller software, ESC calibration code, setup code, and schematic diagrams. This project, inspired by J. Brokking's work, incorporates his original code with updates and enhancements to optimize the flight control and calibration processes for drone systems. The package provides essential tools for building and configuring a custom drone flight controller.",
    stack: [
      { name: "Arduino IDE" },
      { name: "C++" },
      { name: "Embedded Systems" },
    ],
    image: "/src/images/flightcontroller.png",
    live: "", 
    github: "",
  },
  {
    num: "07",
    category: "Embedded Systems",
    title: "MPU6050 Sensor Monitoring System",
    description:
      "A sensor monitoring system built using Arduino IDE and Processing, designed to track the position and acceleration data of an MPU6050 sensor. The Arduino code reads the sensor's output and sends it via serial communication, while the Processing code visualizes this data in a quadcopter interface. This project serves as a real-time motion tracking and visualization tool for UAVs, providing valuable insights into sensor readings and movement patterns.",
    stack: [
      { name: "Arduino IDE" },
      { name: "C++" },
      { name: "Processing" },
      { name: "MPU6050" }
    ],
    image: "/src/images/processing.png",
    live: "", 
    github: "",
  },
  {
    num: "08",
    category: "Actual Drone",
    title: "Functional Drone System",
    description:
      "A complete functional drone system built with various components including the ESP32 and Arduino boards, along with sensors like the MPU6050 for flight stabilization. The project encompasses the full drone build, including the transmitter and receiver systems. The transmitter uses a joystick and potentiometers to control the drone, while the receiver, utilizing the NRF24L01 module, transmits the data to the flight controller. The flight controller then generates PWM signals to control the brushless motors. The drone is equipped with live camera feed and GPS functionality for enhanced navigation and real-time monitoring.",
    stack: [
      { name: "ESP32" },
      { name: "Arduino" },
      { name: "GPS" },
      { name: "Live Camera Feed" },
      { name: "Click next to see the video of the quadcopter" },
    ],
    image: "/src/images/drone-delivery-project.png",
    live: "", 
    github: "",
  },  
  {
    num: "09",
    category: "Drone",
    title: "Quadcopter Flight Demonstration",
    description:
      "A video showcasing the quadcopter in flight, demonstrating its stability, maneuverability, and functionality. The video highlights the drone's performance, including live footage from the onboard camera and real-time movement captured during its operation. This project serves as a visual demonstration of the drone system's capabilities and successful integration of hardware and software.",
    stack: [
      { name: "Transmitter" },
      { name: "Receiver" },
      { name: "Flight Controller" },
      { name: "Drone" },
    ],
    video: "/src/images/dronevid.MOV",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} className="fill-accent" />}
      />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none text-white font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="xl:text-[42px]  text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60 xl:text-2xl text-xl">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl xl:text-3xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20">
                <div className="flex items-center gap-4">
                  <Link to={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight
                            size={33}
                            className="text-white hover:scale-150 transition-all duration-500  text-3xl group-hover:text-accent"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="xl:text-2xl text-xl">Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link to={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub
                            size={33}
                            className="text-white  hover:scale-150 transition-all duration-500 text-3xl group-hover:text-accent"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="xl:text-2xl text-xl">
                            Github repository
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              className="xl:h-[520px] mb-6 xl:w-[520px] w-[350px]"
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[50vh] sm:h-[60vh] md:h-[460px] relative group mt-5  flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      {project.category === "Drone" ? (
                        <video src={project.video} autoPlay muted loop></video>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-fit w-full rounded-[10px] h-full max-h-full"
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:2-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
