import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyles.css";
 
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Let's Connect Section */}
      <div className="connect-section">
        <button className="contact-button">Contact</button>
        <h1>Let's Connect</h1>
        <p>
          Got a question or want to chat? Feel free to reach out to me on{" "}
          <a
            href="https://x.com/dubeygaurav3342"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          . I'm always open to meaningful conversations.
        </p>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>Kalindipuram Prayagraj.</p>
                <p>Uttar Pradesh, INDIA</p>
              </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                91-9695036889
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                gauravdubey4755@gmail.com
              </h4>
            </div>
          </div>

          <div className="right">
            <h4>About Me</h4>
            <p>
              This is Gaurav Dubey. A CS grad and Tech enthusiast
              enjoys discussing new projects and design challenges.
            </p>
            <div className="social">
              <a
                href="https://github.com/gauravdubey0011"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
              <a
                href="https://x.com/dubeygaurav3342"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
