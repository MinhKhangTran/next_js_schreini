import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const UnsereLeistungen = ({ data }) => {
  return (
    <section
      id="leistungen"
      aria-label="leistungen section"
      className="wrapper"
    >
      <h2 className="heading-2 text-center text-primary">Unsere Leistungen</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor.
      </p>
      <div className="leistungen__grid">
        <Row>
          {data.map((leistung) => {
            return (
              <Col key={leistung.id} md={4}>
                <Link href={`/leistungen/${leistung.slug}`}>
                  <div>
                    <picture>
                      <img
                        className="img-fluid"
                        src={`/images/homepage/${leistung.thumb}`}
                        alt={`${leistung.title}`}
                      />
                    </picture>
                    <h3 className="heading-3 | text-primary">Innenbau</h3>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor.
                    </p>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default UnsereLeistungen;
