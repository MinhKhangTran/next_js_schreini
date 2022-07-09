import Link from "next/link";
import { Button, Carousel } from "react-bootstrap";
import Image from "next/image";

const Hero = ({ data }) => {
  return (
    <section id="hero" aria-label="hero section">
      <Carousel>
        {data.map((slide) => {
          return (
            <Carousel.Item key={slide.id} interval={5000}>
              <Image
                src={`/images/homepage/${slide.name}`}
                alt={`${slide.altText}`}
                className="img-fluid"
                priority
                layout="fill"
              />

              <Carousel.Caption>
                <h1 className="text-dark | heading-1">{slide.title}</h1>
                <p className="text-dark">{slide.text}</p>
                <Link href="/kontakt" passHref>
                  <Button variant="primary">Jetzt kontaktieren</Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Hero;
