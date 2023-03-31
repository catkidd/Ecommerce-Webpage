import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Button, Grid } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <div className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h4>Ready to get started?</h4>
            <h4>Talk to us today</h4>
          </div>
          <div className="button-container">
            <Link href="/contact">
              <Grid>
                <Button color="gradient" auto ghost>
                  Get Started
                </Button>
              </Grid>
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <div class="container grid grid-four-column">
          <div class="footer-about">
            <h4>Mahango Deal</h4>
            <p>
             At MahangoDeal, we are passionate about making you feel stylish and comfortable. Hope
              you have a stress-free shopping experience at MahangoDeal.
            </p>
          </div>
          <div class="footer-subscribe">
            <h4>Subscribe to get important updates</h4>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div class="footer-social">
            <h4>Follow Us</h4>
            <div class="footer-social--icons">
              <div>
                <FaDiscord class="icons" />
              </div>
              <div>
                <FaInstagram class="icons" />
              </div>
              <div>
                <FaFacebook class="icons" />
              </div>
            </div>
          </div>
          <div class="footer-contact">
            <h4>Call Us</h4>
            <h4>+977 9864589941</h4>
          </div>
        </div>

        <div class="footer-bottom--section">
          <hr />
          <div class="container grid grid-two-column">
            <p>@{new Date().getFullYear()} MahangoDeal. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS &amp; CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
