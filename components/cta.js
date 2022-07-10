import Link from "next/link";
import { Button } from "react-bootstrap";

const CTA = ({ ctaHeading, ctaSub }) => {
  return (
    <section className="" id="cta" aria-label="cta section">
      <h2 className="text-dark text-center heading-2">{ctaHeading}</h2>
      <p className="text-center">{ctaSub}</p>
      <div className="button__wrapper | d-flex justify-content-center">
        <Link href="/kontakt" passHref>
          <Button variant="primary">Jetzt kontaktieren</Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
