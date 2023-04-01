import styled from "styled-components";
import { Button, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import Footer from "src/components/Footer";
import { margin } from "@mui/system";

const About = () => {
  const router = useRouter();
  const handleAddToCart = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    router.push({
      pathname: "/",
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> MahangoDeal </h1>
            <p>
              Your go-to online destination for all your fashion needs. Our mission is to provide
              you with high-quality, stylish clothing and accessories at affordable prices. From
              trendy basics to statement pieces, we've got you covered. So why wait? Start shopping
              now and discover your new favorite pieces!
            </p>
            <Button
              color="gradient"
              
              style={{ width: "8rem", margin:'0 13rem' }}
              auto
              ghost
              onClick={(e) => handleAddToCart(e)}
            >
              Shop Now
            </Button>
          </div>

          <div className="hero-section-image">
            <figure>
              <img src="/images/hero.jpg" alt="hero-section-photo" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
  background-color: #f1f1f1; /* add a background color */
  img {
    min-width: 10rem;
    height: 10rem;
    border-radius: 5%;
    border: 2px solid #ffffff; /* add a border */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  .hero-section-data {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
      margin: 1rem 0;
      font-size: 1.2rem; /* increase font size */
      color: #333333; /* change text color */
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 3rem; /* increase font size */
      color: #555555; /* change text color */
    }
    .intro-data {
      margin-bottom: 0;
      color: #777777; /* change text color */
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    /* change the breakpoint */
    .grid {
      gap: 5rem; /* reduce the gap */
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* background-color: rgba(81, 56, 238, 0.4); */
    }
    .hero-section-data {
      h1 {
        font-size: 2rem; /* reduce font size */
      }
    }
  }
`;

export default About;
