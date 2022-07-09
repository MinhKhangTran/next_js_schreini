import { Carousel } from "react-bootstrap";

const SocialProof = ({ data }) => {
  return (
    <section id="social__proof" aria-label="social proof section">
      <Carousel>
        {data.map((quote) => {
          return (
            <Carousel.Item key={quote.id} interval={5000}>
              <div className="social__proof--child d-inline-block d-md-flex flex-column justify-content-center">
                <picture className="d-flex justify-content-center">
                  <img
                    className=""
                    src="/images/homepage/quote.svg"
                    alt="quote icon"
                    aria-hidden="true"
                    loading="lazy"
                  />
                </picture>
                <Carousel.Caption>
                  <p className="text-white text-center">{quote.text}</p>
                  <h2 className="text-light text-center | heading-4">
                    {quote.title} | <span>{quote.job}</span>
                  </h2>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default SocialProof;
