import PostHeader from "./PostHeader";
import { AnimatePresence } from "framer-motion";
import Paragraph from "./Presenter/Paragraph";
import ParagraphImp from "./Presenter/ParagraphImp";
import InformationToast from "./Presenter/InformationToast";
import { useEffect, useRef, useState } from "react";
import PostWrapper from "./Presenter/PostWrapper";
import CommentWrapper from "./Presenter/CommentWrapper";

const StatsWithMysql = ({ title, date, id, isPhone }) => {
  const [infoText, setInfoText] = useState("");
  const [offsetHeight, setOffsetHeight] = useState(1);

  const docRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setOffsetHeight(document.documentElement.offsetHeight);
    setTimeout(() => {
      setHeight(docRef.current.clientHeight + 360);
    }, 1000);
  }, []);

  return (
    <PostWrapper pages={height / offsetHeight} isPhone={isPhone}>
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
            src={`/Assets/Blog/Stats-Mysql/header.png`}
            alt=""
          />
          <Paragraph>
            MySQL is one of the most used database system. You can store almost
            everything here. So, today, we're going to add our Mysql database as
            a Grafana data source.
          </Paragraph>
          <Paragraph>
            I'm using Grafana and MySQL as two containers with Docker. Moreover,
            they're on the same network. If it's not your side, just make sure
            that they're able to communicate.
          </Paragraph>

          <Paragraph>
            Firstly, create a user into your database and give it the access you
            want. You may want to use root, however this can lead to security
            issues. Once you've made it. Get into your Grafana dashboard.
          </Paragraph>

          <img
            className={"my-4 rounded-2xl bg-white shadow-md"}
            src={`/Assets/Blog/Stats-Mysql/dashboard-to-datasources.png`}
            alt=""
          />
          <Paragraph>
            Go right into the settings, and data sources. Then click on Add data
            sources.
          </Paragraph>

          <img
            className={"my-4 rounded-2xl bg-white shadow-md"}
            src={`/Assets/Blog/Stats-Mysql/datasources-select.png`}
            alt=""
          />
          <Paragraph>
            As you can see, Grafana supports a lot of different databases. You
            can pick the one you love. However, for our tutorial purpose, select
            the Mysql one.
          </Paragraph>

          <img
            className={"my-4 rounded-2xl bg-white shadow-md"}
            src={`/Assets/Blog/Stats-Mysql/datasources-fields.png`}
            alt=""
          />
          <Paragraph>
            Here we're. The setup is fairly easy. You just have to follow the
            labels. If you're using a specific timezone, don't forget to setup
            it too. Otherwise, it'll use the browser timezone. Finally, click on
            Save & Test button.
          </Paragraph>

          <Paragraph>
            You made it! As we're here, we're going to create your first Mysql
            data graph!
          </Paragraph>
          <Paragraph>To begin with, let's get into your dashboard.</Paragraph>
          <img
            className={"my-4 rounded-2xl bg-white shadow-md"}
            src={`/Assets/Blog/Stats-Mysql/create-dashboard.png`}
            alt=""
          />
          <Paragraph>
            Next, you've three choices. We're going to select "Add a new panel".
            If your data are quite standard, you can browse already made panel
            from Grafana with "Add a panel from the panel library."
          </Paragraph>

          <img
            className={"my-4 rounded-2xl bg-white shadow-md"}
            src={`/Assets/Blog/Stats-Mysql/panel-builder.png`}
            alt=""
          />

          <Paragraph>
            You're now on the panel "creator". It has an impressive amount of
            functionality. It's composed by three sub-panel. On the top left,
            your preview. On the bottom, here is the most important panel, our
            query creator. Then, on the right side, is all the settings that our
            graph is using.
          </Paragraph>

          <Paragraph>
            Personally, I don't like using the query helper that comes with
            Grafana. So, I'am using the text edit mode which can be accessed
            through the pen icon below the Query Inspector button. While you're
            in this mode, you can make your own queries easily with the SQL
            language. As an example, check-out how I made my own panel.
          </Paragraph>

          <img
            className={"my-4 rounded-2xl bg-white shadow-md"}
            src={`/Assets/Blog/Stats-Mysql/panel-example.png`}
            alt=""
          />
          <Paragraph>
            To get to this result, i'm using a simple SQL query. Firstly, to
            make Grafana running, you must select a time series like{" "}
            <ParagraphImp setText={setInfoText}>
              DATE(NOW()) as time
            </ParagraphImp>
            . I'm not using it because of nulls values. If for an x day, you
            don't have any records, you won't have anything displayed. That's
            not what i wanted. So the fix is to use the following command:{" "}
            <ParagraphImp setText={setInfoText}>
              $__timeGroup(YOUR_PERIOD_COLUMN, '24h', 0) as time
            </ParagraphImp>
            , it'll replace all the nulls values with 0. Then, the SQL query is
            pretty simple.
          </Paragraph>

          <Paragraph>
            You're now able to create some fabulous panels while getting stats
            of everything!
          </Paragraph>

          <CommentWrapper id={id} />
        </div>
      </div>
    </PostWrapper>
  );
};
export default StatsWithMysql;
