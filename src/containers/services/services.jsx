import React, { useState, useRef, useEffect } from "react";
import { FaCheckCircle, FaArrowRight, FaTimes, FaCode, FaMobileAlt, FaDatabase, FaCloud, FaLightbulb } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Modal = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-800 w-11/12 md:w-3/4 lg:w-2/3 p-8 rounded-lg border-2 border-green-400 relative">
        <FaTimes
          className="absolute top-4 right-4 text-green-400 cursor-pointer w-6 h-6"
          onClick={onClose}
        />
        <h3 className="text-3xl xl:text-[25px] font-bold text-green-400 mb-4">{service.title}</h3>
        <p className="text-gray-400 xl:text-2xl mb-6">{service.description}</p>

        <ul className="space-y-4">
          {service.details.map((detail, i) => (
            <li key={i} className="flex items-start space-x-2">
              <FaCheckCircle className="text-green-400 w-5 h-5 xl:w-[20px] xl:h-[20px]  flex-shrink-0" />
              <p className="text-gray-300 xl:text-xl">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef();

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const servicesData = [
    {
      icon: <MdWeb size={65}  className=" text-green-400" />,
      title: "Web Development",
      description: "Crafting seamless and responsive web applications with modern technologies.",
      details: [
        "Develop dynamic and responsive websites using React, Node.js, and Tailwind CSS.",
        "Build RESTful APIs and integrate them with front-end applications.",
        "Ensure scalability and security of web applications.",
        "Optimize websites for performance and SEO.",
      ],
    },
    {
      icon: <FaCode size={65} className=" text-green-400" />,
      title: "Software Development",
      description: "Building robust and scalable software solutions for various platforms.",
      details: [
        "Develop desktop and mobile applications using Java, C++, and Python.",
        "Create cross-platform mobile apps with Flutter and Dart.",
        "Design and implement scalable backend systems.",
        "Conduct thorough testing and debugging to ensure software quality.",
      ],
    },
    {
      icon: <FaMobileAlt size={65} className=" text-green-400" />,
      title: "Mobile Development",
      description: "Developing high-performance mobile applications for Android and iOS.",
      details: [
        "Build native Android apps using Java and Kotlin.",
        "Develop cross-platform apps with Flutter and Dart.",
        "Integrate APIs and backend services into mobile apps.",
        "Optimize apps for performance and user experience.",
      ],
    },
    {
      icon: <FaDatabase size={65} className=" text-green-400" />,
      title: "Database Management",
      description: "Designing and managing efficient and scalable database systems.",
      details: [
        "Design and implement relational databases using MySQL and PostgreSQL.",
        "Work with NoSQL databases like MongoDB for scalable solutions.",
        "Optimize database performance and ensure data integrity.",
        "Implement backup and recovery strategies.",
      ],
    },
    {
      icon: <FaCloud size={65} className=" text-green-400" />,
      title: "Cloud Solutions",
      description: "Building and deploying scalable cloud-based applications and services.",
      details: [
        "Deploy applications on cloud platforms like AWS and Azure.",
        "Implement serverless architectures and microservices.",
        "Manage cloud infrastructure and ensure high availability.",
        "Optimize cloud costs and performance.",
      ],
    },
    {
      icon: <FaLightbulb size={65} className=" text-green-400" />,
      title: "Technology Consultant",
      description: "Offer strategic guidance on leveraging emerging technologies for digital transformation.",
      details: [
        "Offer strategic guidance on leveraging emerging technologies such as AI and Blockchain.",
        "Assess feasibility and potential impact of technology solutions on business objectives.",
        "Develop implementation strategies and roadmaps for integrating new technologies.",
        "Provide expertise in evaluating and selecting appropriate technologies and platforms.",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 relative">
      <PageHeaderContent
        className="text-center"
        headerText="Services"
        icon={<BsInfoCircleFill size={40} className="text-green-400" />}
      />
      <span className="section__subtitle">What I do</span>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative border-2 border-green-400 bg-gray-800 xl:h-[300px] p-8 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex xl:flex-col items-center space-x-4 mb-6">
             {service.icon}
              <h3 className="text-2xl xl:text-[25px] xl:m-5 font-bold text-white">{service.title}</h3>
            </div>

            <button
              onClick={() => openModal(service)}
              className="flex xl:text-2xl p-5 items-center hover:underline hover:scale-105 transition-all ease-in-out duration-500 text-green-400 font-bold cursor-pointer"
            >
              View More
              <FaArrowRight size={30} className="ml-2 xl:ml-11 " />
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <Modal service={selectedService} onClose={closeModal} />
      )}
    </section>
  );
};

export default Services;