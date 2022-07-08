import { Col, Row } from "react-bootstrap";

const Feat = ({ data }) => {
  console.log(data);
  return (
    <section id="feat" aria-label="feat section" className="bg-info">
      <Row className="feat__wrapper wrapper">
        {data.map(({ id, icon, text, title }) => {
          return (
            <Col className="feat__wrapper--child | text-center" key={id} md={4}>
              <picture>
                <img
                  src={`/images/homepage/${icon}`}
                  alt={`${icon} icon`}
                  aria-hidden="true"
                />
              </picture>
              <h2 className="heading-3 text-primary text-center">{title}</h2>
              <p>{text}</p>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Feat;
