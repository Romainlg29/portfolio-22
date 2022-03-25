import Seo from "../../components/Utils/Seo";
import StatsMysql from "../../components/Scene/Posts/StatsWithMysql";
import { useMediaQuery } from "react-responsive";

const StatsWithMysql = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo
        title={`Romain Le Gall - Use MySQL as a datasource for your Grafana!`}
        description={
          "MySQL is one of the most used database system. You can store almost everything here. So, today, we're going to add our Mysql database as a Grafana data source."
        }
        keywords={
          "MySQL, Grafana, data sources, database, graph, stats, analytics, easy, fast, tutorial"
        }
      />
      <StatsMysql
        title={"Use MySQL as a datasource for your Grafana!"}
        date={"March 20th 2022"}
        id={7}
        isPhone={isPhone}
      />
    </>
  );
};
export default StatsWithMysql;
