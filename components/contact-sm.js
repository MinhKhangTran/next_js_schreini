import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const ContactSm = ({ data }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <section
      id="contact-sm"
      aria-label="Kontakt auf der Homepage Section"
      className="wrapper"
    >
      <h2 className="text-primary text-center heading-2">
        Kontaktieren Sie uns
      </h2>
      <p className="text-center">
        Kommen Sie vorbei oder hinterlassen Sie uns eine Nachricht oder rufen
        Sie uns an!
      </p>
      <Row className="contact__row">
        {data.map(({ id, icon, text }) => {
          return (
            <Col
              className={`contact__row--child-${id} contact__row--child | d-flex align-items-center`}
              key={id}
              lg={3}
              md={6}
            >
              <picture>
                <img
                  src={`/images/homepage/${icon}`}
                  alt={`${icon} icon`}
                  aria-hidden="true"
                />
              </picture>
              <p>{text}</p>
            </Col>
          );
        })}
        <Col lg={3} md={6}></Col>
      </Row>
      <Form
        className="form__wrapper"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="exampleInputName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Name" />
          <Form.Control.Feedback type="invalid">
            Bitte einen Namen eingeben
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleInputEmail" className="mb-3">
          <Form.Label className="form-label">E-mail Adresse</Form.Label>
          <Form.Control required type="email" placeholder="E-Mail" />
          <Form.Control.Feedback type="invalid">
            Bitte eine E-Mail Adresse eingeben
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleInputNachricht" className="mb-3">
          <Form.Label className="form-label">Nachricht</Form.Label>
          <Form.Control required as="textarea" rows={3} />
          <Form.Control.Feedback type="invalid">
            Bitte eine Nachricht eingeben
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-grid | button__wrapper">
          <Button variant="primary" type="submit">
            Nachricht senden
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default ContactSm;
