import React, { useRef, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./styles.scss";
import image from "../../images/phted (1) (1).png";
import { FaHandshake, FaUsers } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Show loading alert
    Swal.fire({
      title: "Sending your message...",
      text: "Please wait while we send your message.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    emailjs
      .sendForm("service_9o01dgm", "template_edef5be", form.current, "JNUj4-65mP8C04_1X")
      .then(
        (result) => {
          console.log("Message sent:", result.text);

          // Show success alert
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent! 🎉",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#00ff99",
            customClass: {
              popup: "sweet-alert-popup",
              title: "sweet-alert-title",
              confirmButton: "sweet-alert-confirm-button",
            },
          });

          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.log("Send email error:", error.text);

          // Show error alert
          Swal.fire({
            title: "Error!",
            text: "Failed to send the message. Please try again later. 😢",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#ff4d4d",
            customClass: {
              popup: "sweet-alert-popup",
              title: "sweet-alert-title",
              confirmButton: "sweet-alert-confirm-button",
            },
          });

          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} className="fill-accent" />}
      />
      <div className="contact__wrapper">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact__form-container">
            <h3 className="contact__header-text">Let's Connect</h3>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="input-container">
                <input
                  type="text"
                  name="user_name"
                  required
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                />
                <label className={nameFocused ? "focused" : ""}>
                  Your Name
                </label>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="user_email"
                  required
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />
                <label className={emailFocused ? "focused" : ""}>
                  Your Email
                </label>
              </div>
              <div className="input-container">
                <textarea
                  name="message"
                  required
                  rows="5"
                  onFocus={() => setMessageFocused(true)}
                  onBlur={() => setMessageFocused(false)}
                ></textarea>
                <label className={messageFocused ? "focused" : ""}>
                  Your Message
                </label>
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </Animate>

        <div className="contact__text-container">
          <div className="contact__text">
            <div className="text-header">
              <FaHandshake className="cooperation-icon" />
              <h1>Hi There!</h1>
            </div>
            <p>
              As a passionate developer, I'm excited about the opportunity to
              collaborate with your team and community. With my skills, I'm
              committed to bringing innovative solutions to the table.
            </p>
            <div className="text-footer">
              <FaUsers className="cooperation-icon" />
              <p>
                Let's work together to create something impactful and beneficial
                for our users and community. Reach out today, and let's start
                building together!
              </p>
            </div>
          </div>
          <div className="contact__image">
            <img src={image} alt="Contact Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;