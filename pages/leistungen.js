import UnsereLeistungen from "../components/unsere-leistungen";
import { getJsonData } from "../utils/tool";
import { useRouter } from "next/router";
import CTA from "../components/cta";

const Leistungen = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <UnsereLeistungen data={data.leistungen} leistungen={router.pathname} />
      <CTA
        ctaHeading="Lassen Sie sich ausführlich beraten!"
        ctaSub="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor. Lorem ipsum dolor sit amet."
      />
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

export default Leistungen;
