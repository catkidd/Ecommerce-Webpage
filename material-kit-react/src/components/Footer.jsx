import React from "react";
import { FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h4>Mahango Deal</h4>
            <p>
              Mahango Deal is dedicated to bringing you the perfect combination of style and
              comfort, and we are committed to making your shopping experience as stress-free as
              possible.
            </p>
          </div>
          <div className="footer-subscribe">
            <h4>Subscribe to get important updates</h4>
            <form action="#">
              <input type="email" name="email" placeholder="abc@example.com" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaFacebook className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <p>Call Us</p>
            <p>+977 9843-000000</p>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>&copy; {new Date().getFullYear()} Mahango Deal. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY | TERMS &amp; CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
