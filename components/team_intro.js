import { Col, Row } from "react-bootstrap";

const TeamIntro = ({ data }) => {
  return (
    <section
      id="team-intro"
      className="wrapper"
      aria-label="team intro section"
    >
      <h2 className="text-primary text-center | heading-2">
        Das Team stellt sich vor
      </h2>
      <Row>
        {data.map((item) => {
          return (
            <Col key={item.id} lg={4} md={6}>
              <picture>
                <img
                  className="img-fluid"
                  src={`/images/ueber-uns/${item.img}`}
                  alt={`${item.title}`}
                  loading="lazy"
                />
              </picture>

              <h3 className="heading-3 | text-center text-primary text-capitalize">
                {item.title}
              </h3>

              <p className="text-center | job">{item.job}</p>
              <p className="text-center">{item.bio}</p>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default TeamIntro;
