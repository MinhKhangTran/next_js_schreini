import Philo from "../components/philo";
import CTA from "../components/cta";
import TeamIntro from "../components/team_intro";
import { getJsonData } from "../utils/tool";

const Team = ({ data }) => {
  return (
    <>
      <Philo />
      <TeamIntro data={data.team} />
      <CTA
        ctaHeading="Arbeiten Sie mit uns!"
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

export default Team;
