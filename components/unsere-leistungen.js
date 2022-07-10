import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const UnsereLeistungen = ({ data, leistungen }) => {
  return (
    <section
      id="leistungen"
      aria-label="leistungen section"
      className={`wrapper ${
        leistungen === "/leistungen" ? "leistung__page--wrapper" : ""
      }`}
    >
      <h2 className="heading-2 text-center text-primary | pb-2">
        Unsere Leistungen
      </h2>
      <p className="text-center leistungen__sub">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor.
      </p>
      <div className="leistungen__grid">
        <Row>
          {data.map((leistung) => {
            return (
              <Col className="leistungen__grid--child" key={leistung.id} md={4}>
                <Link href={`/leistungen/${leistung.slug}`}>
                  <div>
                    <picture>
                      <img
                        className="img-fluid"
                        src={`/images/homepage/${leistung.thumb}`}
                        alt={`${leistung.title}`}
                        loading="lazy"
                      />
                    </picture>

                    <h3 className="heading-3 | text-center text-primary text-capitalize">
                      <Link href={`/leistungen/${leistung.slug}`}>
                        {leistung.title}
                      </Link>
                    </h3>

                    <p className="text-center">{leistung.excerpt}</p>
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
