import Seo from "../../components/Utils/Seo";
import Autoliv from "../../components/Scene/Posts/InternshipAtAutoliv";
import { useMediaQuery } from "react-responsive";

const InternshipAutoliv = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo title={`Romain Le Gall - Internship at Autoliv!`} />
      <Autoliv
        title={"Internship at Autoliv!"}
        date={"June 29th 2021"}
        id={3}
        isPhone={isPhone}
      />
    </>
  );
};
export default InternshipAutoliv;
