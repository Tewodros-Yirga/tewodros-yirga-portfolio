
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import homeicon from "../../images/teddy-logofinal.png";
import "./styles.scss";
import { debounce } from "lodash";

const data = [
  { label: "HOME", to: "home" },
  { label: "ABOUT ME", to: "about" },
  { label: "RESUME", to: "resume" },
  { label: "SKILLS", to: "skills" },
  { label: "SERVICES", to: "services" },
  { label: "PORTFOLIO", to: "portfolio" },
  { label: "RECOMMENDATION", to: "testimonial" },
  { label: "CONTACT", to: "contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [navbarTextColor, setNavbarTextColor] = useState("white");

  const handleToggleIcon = () => setToggleIcon(!toggleIcon);
  const handleLinkClick = () => setToggleIcon(false);

  const handleScroll = debounce(() => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
    const sectionElement = document.getElementById(currentSection);
    if (sectionElement) {
      const computedStyles = window.getComputedStyle(sectionElement);
      setNavbarTextColor(computedStyles.color);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (toggleIcon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleIcon]);

  return (
    <header >
      <nav
        className="navbar"
        style={{
          backgroundColor: activeSection
            ? getComputedStyle(document.getElementById(activeSection))
                .backgroundColor
            : "transparent",
          color: navbarTextColor,
        }}
      >
        <div className="navbar__container">
          <Link to="home" className="navbar__container__logo">
            <img className="h-[70px]" src={homeicon} alt="homeicone" height={150} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""} font-primary`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={handleLinkClick}
                spy={true}
                smooth={true}
                duration={600}
                activeClass="active-link"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon} aria-label="Toggle navigation">
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
