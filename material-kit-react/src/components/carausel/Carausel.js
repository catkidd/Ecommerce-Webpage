import Carousel from "react-bootstrap/Carousel";
import "animate.css/animate.min.css";

function LandingCarauselComponent() {
  return (
    <Carousel>
      <Carousel.Item className="animate__animated animate__slideInLeft">
        <img className="d-block w-100" src="/images/1.jpg" alt="First slide" />
        <Carousel.Caption className="animate__animated animate__slideInLeft">
          {/* <h3 className="mt-5">Discover the best deals for the season!</h3> */}
          <p>Unwrap joy this holiday with our exclusive offers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="animate__animated animate__slideInRight">
        <img className="d-block w-100" src="/images/2.jpg" alt="Second slide" />

        <Carousel.Caption className="animate__animated animate__slideInRight">
          {/* <h3>Unwrap Joy this holiday with our exclusive offers</h3> */}
          {/* <p>Find your perfect match with our wide selection of products.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="animate__animated animate__slideInLeft">
        <img className="d-block w-100" src="/images/3.jpg" alt="Third slide" />

        <Carousel.Caption className="animate__animated animate__slideInLeft">
          {/* <h3>Find your perfect match with our wide selection of products.</h3> */}
          {/* <p>Upgrade your style with our fashion collection.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LandingCarauselComponent;
