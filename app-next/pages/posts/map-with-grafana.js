import Seo from "../../components/Utils/Seo";
import MapGrafana from "../../components/Scene/Posts/MapWithGrafana";
import { useMediaQuery } from "react-responsive";

const MapWithGrafana = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo
        title={`Romain Le Gall - Create a map with Grafana`}
        description={
          "A recent update of Grafana rolled out a new map component called Geomap. Today, we're going to setup our own map by using the lookup mode."
        }
        keywords={
          "MySQL, Grafana, data sources, database, graph, stats, map, geomap, heatmap, lookup, analytics, easy, fast, tutorial"
        }
      />
      <MapGrafana
        title={"Create a map with Grafana"}
        date={"March 22th 2022"}
        id={8}
        isPhone={isPhone}
      />
    </>
  );
};
export default MapWithGrafana;
