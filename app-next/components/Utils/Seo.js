import Head from "next/head"

const Seo = ({ title = "Romain Le Gall", description = "", keywords = "" }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/icon.svg" />
    </Head>
  );
};
export default Seo;
