import { Helmet } from "react-helmet-async";

const Seo = ({ title = "Romain Le Gall", description = "", keywords = "" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};
export default Seo;
