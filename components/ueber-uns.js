import Image from "next/image";
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";
import aboutUsPic from "../public/images/homepage/ueber-uns.jpg";

const UeberUns = () => {
  return (
    <section className="wrapper" id="ueber-uns" aria-label="Über uns section">
      <Row>
        <Col md={6}>
          <Image
            src={aboutUsPic}
            alt="Ein Bild über Schreini's Team"
            className="img-fluid"
            placeholder="blur"
            priority
          />
        </Col>
        <Col md={6}>
          <h2 className="heading-2 | text-primary">Über Uns</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <p className="second__text">
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.{" "}
          </p>
          <Link href="/team" passHref>
            <Button variant="outline-primary">Mehr über das Team</Button>
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default UeberUns;
