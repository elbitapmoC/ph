import Head from "next/head";

const Heading = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Photon Health Dashboard" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Heading;
