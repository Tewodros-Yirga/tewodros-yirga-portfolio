import { FaGithub, FaLinkedinIn, FaTelegram, FaPhone } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Tewodros-Yirga" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/tewodros-yirga-dtu/" },
  { icon: <FaTelegram />, path: "https://t.me/teddyy21m" },
  { icon: <FaPhone />, path: "tel:+251955179500" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;