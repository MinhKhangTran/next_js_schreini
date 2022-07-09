import Link from "next/link";
import { Button } from "react-bootstrap";

const CTA = () => {
  return (
    <section className="" id="cta" aria-label="cta section">
      <h2 className="text-dark text-center">
        Lassen Sie sich ausführlich beraten!
      </h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor. Lorem ipsum dolor sit amet.
      </p>
      <div className="button__wrapper | d-flex justify-content-center">
        <Link href="/kontakt" passHref>
          <Button variant="primary">Jetzt kontaktieren</Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
