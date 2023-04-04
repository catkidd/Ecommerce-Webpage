import styled from "styled-components";
import { useRef } from "react";
import { emailConfig } from "src/config/email.config";
import { toastifyService } from "src/services/toastify.service";
import emailjs from "@emailjs/browser";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailConfig.serviceID, emailConfig.templateID, form.current, emailConfig.publicKEY)
      .then(
        (result) => {
          toastifyService.success("Email sent successfully");
          window.location.reload();
        },
        (error) => {
          toastifyService.error("Failed to send email");
        }
      );
  };

  const Wrapper = styled.section`
    padding: 2rem 0 5rem 0;
    text-align: center;

    .common-heading {
      margin-bottom: 3rem;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 40rem;
        font-size: 1.2rem;
        margin: auto;
        background-color: #f2f2f2;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          label {
            font-size: 1rem;
            font-weight: 500;
          }

          input[type="text"],
          input[type="email"],
          textarea {
            padding: 1rem 2rem;
            font-size: 1rem;
            border-radius: 5px;
            border: none;
            background-color: #e6e6e6;

            &:focus {
              border: 2px solid #6864f4;
              outline: none;
            }
          }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.5s ease;
            background-color: #6864f4;
            color: white;
            padding: 1rem 1rem;
            border-radius: 5px;
            border: none;

            &:hover {
              background-color: #4640f2;
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free To Contact Us </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3533.5670441747047!2d85.36916131503476!3d27.6688639828078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQwJzA3LjkiTiA4NcKwMjInMTYuOSJF!5e0!3m2!1sen!2snp!4v1680353595641!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} className="contact-inputs">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="firstName" required autoComplete="off" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required autoComplete="off" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

Contact.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Contact;
