import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Schreini</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Eine Website für einen erfundenen Schreiner namens Schreini"
        />
        <meta
          name="keywords"
          content="Handwerker, Schreiner, NextJs, Bootstrap"
        />
        <meta name="author" content="MKT" />
      </Head>
      <a className="skip-to-content" href="#main-content">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <main tabIndex="-1" id="main-content">
        {props.children}
      </main>
      <Footer data={props.children.props.data.kontakt} />
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

export default Layout;
