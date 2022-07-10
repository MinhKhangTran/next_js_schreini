import { getJsonData } from "../../utils/tool";
import Image from "next/image";
import { Accordion, Col, Row } from "react-bootstrap";
import CTA from "../../components/cta";

const LeistungsPage = ({ data }) => {
  return (
    <>
      <section
        id="leistungspage"
        aria-label="leistungspage section"
        className="wrapper"
      >
        <Row className="intro__section">
          <Col lg={4} md={4}>
            <h1 className="text-primary heading-1 | text-capitalize">
              {data.title}
            </h1>
          </Col>
          {data.gallery.map((img) => {
            return (
              <Col key={img.id} lg={4} md={4}>
                <picture>
                  <img
                    className="img-fluid"
                    src={`/images/leistungen/${img.image}`}
                    alt={`${img.altText}`}
                    loading="lazy"
                  />
                </picture>
              </Col>
            );
          })}
        </Row>
        <Row className="ueberblick__section">
          <Col lg={4} md={4}>
            <h2 className="heading-2 text-primary">Überblick</h2>
          </Col>
          <Col lg={8} md={8}>
            <div dangerouslySetInnerHTML={{ __html: data.ueberblick }}></div>
          </Col>
        </Row>
        <Row className="vorteile__section">
          <Col lg={4} md={4}>
            <h2 className="heading-2 text-primary">Ihre Vorteile</h2>
          </Col>
          <Col lg={8} md={8}>
            <div dangerouslySetInnerHTML={{ __html: data.vorteile.text }}></div>
            {data.vorteile.merkmale.map((item) => {
              return (
                <div className="d-flex gap-3" key={item.id}>
                  <span>
                    <svg
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0C4.50742 0 0 4.50742 0 10C0 15.4926 4.50742 20 10 20C15.4926 20 20 15.4926 20 10C20 4.50742 15.4926 0 10 0ZM8.7898 14.5484L4.4107 10.1694L6.06781 8.51227L8.86648 11.3109L14.485 6.20344L16.062 7.93723L8.7898 14.5484Z"
                        fill="#F97316"
                      />
                    </svg>
                  </span>
                  <p className="text-primary">{item.text}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="faq__section">
          <Col lg={4} md={4}>
            <h2 className="heading-2 text-primary">Häufig gestellte Fragen</h2>
          </Col>
          <Col lg={8} md={8}>
            <Accordion defaultActiveKey="0">
              {data.faq.map((item, index) => {
                return (
                  <Accordion.Item key={item.id} eventKey={`${index}`}>
                    <Accordion.Header>{item.frage}</Accordion.Header>
                    <Accordion.Body>{item.antwort}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </section>
      <CTA
        ctaHeading="Lassen Sie sich ausführlich beraten!"
        ctaSub="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor. Lorem ipsum dolor sit amet."
      />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getJsonData();
  const leistungen = data.leistungen;

  let leistungenData = leistungen.find(
    (leistung) => leistung.slug === params.slug
  );

  return {
    props: {
      data: leistungenData,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getJsonData();
  const paths = data.leistungen.map((leistung) => ({
    params: { slug: leistung.slug },
  }));

  return { paths, fallback: false };
};

export default LeistungsPage;
