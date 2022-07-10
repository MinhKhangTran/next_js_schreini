import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import philoPic from "../public/images/ueber-uns/philo.jpg";

const Philo = () => {
  return (
    <section id="philo" aria-label="philo section" className="wrapper">
      <h1 className="text-primary | heading-1">Unsere Philosophie</h1>
      <Row>
        <Col md={6}>
          <Image
            src={philoPic}
            alt="Ein schöner Werkzeugkasten"
            className="img-fluid"
            placeholder="blur"
            priority
          />
        </Col>
        <Col md={6}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <p>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Philo;
