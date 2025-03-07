import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll"; // For smooth scrolling

const FooterCol = ({ heading, links }) => {
  return (
    <div className="footer__col">
      <h3 className="footer__col__title">{heading}</h3>
      <ul className="footer__col__links">
        {links.map((link, index) => (
          <li key={index}>
            {link.path.startsWith("#") ? (
              // Internal links (smooth scrolling)
              <Link
                to={link.path.substring(1)} // Remove '#' for react-scroll
                smooth={true}
                duration={500}
                offset={-50} // Adjust offset if needed
                className="cursor-pointer"
              >
                {link.title}
              </Link>
            ) : (
              // External links
              <a href={link.path} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterCol.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterCol;