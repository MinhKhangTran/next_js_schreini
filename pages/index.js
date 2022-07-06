import Hero from "../components/hero";
import { getJsonData } from "../utils/tool";

export default function Home({ data }) {
  return (
    <>
      <Hero data={data.carrousel} />
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
