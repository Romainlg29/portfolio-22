import PostHeader from "./PostHeader";
import { AnimatePresence } from "framer-motion";
import Paragraph from "./Presenter/Paragraph";
import ParagraphImp from "./Presenter/ParagraphImp";
import InformationToast from "./Presenter/InformationToast";
import { useEffect, useRef, useState } from "react";
import PostWrapper from "./Presenter/PostWrapper";

const MapWithGrafana = ({ title, date, id, isPhone }) => {
  const [infoText, setInfoText] = useState("");

  const docRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setHeight(docRef.current.clientHeight + 340);
    }, 1000);
  }, []);

  return (
    <PostWrapper
      pages={height / document.documentElement.offsetHeight}
      isPhone={isPhone}
    >
      <AnimatePresence exitBeforeEnter>
        {infoText && infoText !== "" ? (
          <InformationToast text={infoText} setText={setInfoText} />
        ) : null}
      </AnimatePresence>

      <PostHeader title={title} date={date} id={id} />
      <div className="w-screen flex flex-col items-center" ref={docRef}>
        <div className="w-11/12 lg:w-3/5 mt-2 md:mt-6">
          <img
            className={"my-4 p-2 rounded-xl bg-white shadow"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Map-Grafana/header.png`}
            alt=""
          />
          <Paragraph>
            A recent update of Grafana rolled out a new map component called
            Geomap. Today, we're going to setup our own country map by using the
            lookup mode.
          </Paragraph>

          <Paragraph>
            What's the lookup mode ? It's one of the three mode allowed by
            Grafana. It allows us to import location such as country by
            referring the country's name or code like 'FR', 'GB' or 'DE'.
          </Paragraph>

          <Paragraph>
            Let's begin with a new panel. Right after select the graph type as
            Geomap.
          </Paragraph>

          <img
            className={"my-4 rounded-2xl bg-white shadow-md"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Map-Grafana/select-map.png`}
            alt=""
          />

          <Paragraph>
            Then, you should obtain a similar result. Firstly, turn the SQL mode
            on by right clicking on the pencil button at the bottom left panel.
          </Paragraph>

          <img
            className={"my-4 rounded-2xl bg-white shadow-md"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Map-Grafana/sql-mode.png`}
            alt=""
          />

          <Paragraph>
            Now, Grafana needs two things, a time series and locations. While
            doing my own map, I encounter an issue. You must'nt use a count like
            method. Indeed, Grafana make by itself the weight in terms of the
            number of rows.
          </Paragraph>

          <Paragraph>
            In my situation, I log the location as two letters from the country
            code. You can go with a similar request to mine :{" "}
            <ParagraphImp setText={setInfoText}>
              SELECT NOW() as time, SUBSTRING(lang, 4, 2) FROM
              unique_visits_logs;
            </ParagraphImp>
            . If you're using another database, you should get a similar
            request.
          </Paragraph>

          <Paragraph>
            After you made your request, nothing should be displayed. We're
            going to fix that. Simply go the the right panel, at data layer, you
            are able to select a layer type, pick the one you want. Then as
            location, select lookup. After that, pick the correct lookup field.
          </Paragraph>

          <img
            className={"my-4 rounded-2xl bg-white shadow-md"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Map-Grafana/layer-type.png`}
            alt=""
          />

          <Paragraph>That's it !</Paragraph>
        </div>
      </div>
    </PostWrapper>
  );
};
export default MapWithGrafana;
