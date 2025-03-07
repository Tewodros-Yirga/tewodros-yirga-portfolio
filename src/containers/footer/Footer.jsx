import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";
import "./styles.css";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaTelegram } from "react-icons/fa";

const FooterStyle = styled.div`
  background: linear-gradient(135deg, #1c1c22, #2a2a33);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
    padding: 2rem;
  }
  .footer__col {
    line-height: 1.8;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col__title {
    font-size: 3rem;
    color: #00ff99;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
    font-size: 1.5rem;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: #00ff99;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 2rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container" style={{ fontFamily: "'Lobster', sans-serif" }}>
        <div className="footer__col1">
          <h1 className="footer__col1__title">Tewodros Yirga</h1>
          <PText>
            As a dedicated full stack developer in React, Next.js, Node.js, and
            Express, I am passionate about creating innovative solutions. With a
            keen enthusiasm for rapidly mastering new technologies, I am
            committed to delivering high-quality, cutting-edge development work.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              { title: "Home", path: "#home" },
              { title: "About", path: "#about" },
              { title: "Skills", path: "#skills" },
              { title: "Resume", path: "#resume" },
              { title: "Portfolio", path: "#portfolio" },
              { title: "Contact", path: "#contact" },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+251955179500",
                path: "tel:+251955179500",
              },
              {
                title: "tewodrosy21@gmail.com",
                path: "mailto:tewodrosy21@gmail.com",
              },
              {
                title: "Ethiopia, Bahr dar",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/tewodros-yirga-dtu/",
              },
              {
                title: "Github",
                path: "https://github.com/Tewodros-Yirga",
              },
              {
                title: "Telegram",
                path: "https://t.me/teddyy21m",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            <div className="home__icons">
              <a
                href="https://github.com/Tewodros-Yirga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="contact-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/tewodros-yirga-dtu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="contact-icon" />
              </a>
              <a href="tel:+251955179500">
                <FaPhone className="contact-icon" />
              </a>
              <a href="mailto:tewodrosy21@gmail.com">
                <FaEnvelope className="contact-icon" />
              </a>
              <a
                href="https://t.me/teddyy21m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="contact-icon" />
              </a>
            </div>
            <div className="cr1">
              'The best way to predict the future is to create it.'
            </div>
            <div className="cr2">© 2024 Developed by Tewodros Yirga</div>
            <div className="cr3">All rights reserved</div>
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}