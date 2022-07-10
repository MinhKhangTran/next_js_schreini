import ContactSm from "../components/contact-sm";
import { getJsonData } from "../utils/tool";
import { useRouter } from "next/router";

const Kontakt = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <section className="wrapper" id="contact" aria-label="contact section">
        <h1 className="heading-1 text-primary">Kontaktieren Sie uns gerne!</h1>
        <p className="contact_sub">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </p>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.941084253977!2d13.377514965807325!3d52.516405279813526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1657442651114!5m2!1sde!2sde"
        width="1440"
        height="600"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <ContactSm data={data.kontakt} contact={router.pathname} />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getJsonData();
  return {
    props: {
      data: data,
    },
  };
};

export default Kontakt;
