import React from "react";
import "./scrollUp.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  // Show scroll button when the user scrolls down
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // When the scroll is higher than 560 viewport height, add the "show-scroll" class
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      // Otherwise, remove the "show-scroll" class
      scrollUp.classList.remove("show-scroll");
    }
  });

  return (
    <a href="#home" className="scrollup">
      <FaArrowUp className="scrollup__icon" />
    </a>
  );
};

export default ScrollUp;