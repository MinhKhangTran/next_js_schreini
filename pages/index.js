import ContactSm from "../components/contact-sm";
import Feat from "../components/feat";
import Hero from "../components/hero";
import SocialProof from "../components/social-proof";
import UeberUns from "../components/ueber-uns";
import UnsereLeistungen from "../components/unsere-leistungen";
import { getJsonData } from "../utils/tool";

export default function Home({ data }) {
  return (
    <>
      <Hero data={data.carrousel} />
      <UeberUns />
      <UnsereLeistungen data={data.leistungen} />
      <Feat />
      <SocialProof />
      <ContactSm />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getJsonData();
  return {
    props: {
      data: data,
    },
  };
};
