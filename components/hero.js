import { Carousel } from "react-bootstrap";

const Hero = ({ data }) => {
  console.log(data);
  return (
    <section id="hero" aria-label="hero section">
      <Carousel>
        {data.map((slide) => {
          return (
            <Carousel.Item key={slide.id} interval={1000000}>
              <picture>
                <img
                  className="img-fluid"
                  src={`/images/homepage/${slide.name}`}
                  alt={`${slide.altText}`}
                />
              </picture>
              <Carousel.Caption>
                <h1 className="text-dark">{slide.title}</h1>
                <p className="text-dark">{slide.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Hero;
