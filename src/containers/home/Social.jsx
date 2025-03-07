import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/yourprofile" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/yourprofile" },
  { icon: <FaYoutube />, path: "https://youtube.com/yourchannel" },
  { icon: <FaTwitter />, path: "https://twitter.com/yourhandle" },
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