import { motion } from "framer-motion";
import PostHeader from "./PostHeader";
import { useEffect, useRef, useState } from "react";
import PostWrapper from "./Presenter/PostWrapper";

const InternshipAtAutoliv = ({ title, date, id }) => {
  const docRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setHeight(docRef.current.clientHeight + 340);
    }, 1000);
  }, []);

  return (
    <PostWrapper pages={height / document.documentElement.offsetHeight}>
      <PostHeader title={title} date={date} id={id} />

      <div className="w-screen flex flex-col items-center" ref={docRef}>
        <div className="w-11/12 lg:w-3/5 mt-2 md:mt-6">
          <img
            className={"my-4 p-2 rounded-xl bg-white shadow"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Autoliv/header.png`}
            alt="Internship at Autoliv"
          />
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Between the May, 31st and June, 25th 2021, I made my first
            internship at Livbag, an Autoliv’s factory in the IT Service.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            In this internship, i mainly reworked an existing app. This app
            deals with the stock, the all the products that transit at Livbag.
            This app was originally made with PHP. It was unbelievably slow,
            that wasn’t a “real-time app”. So my internship supervisor, asked me
            if I wanted to rework this app from scratch with the language I
            want.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            I took React as the front-end library and Express as back-end. I
            chose these two because they are fast, easy to work with and easily
            upgradable.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            While I was develloping the back-end, I faced a major problem which
            was the database connection.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            To easily connect to databases, Livbag uses some ODBC connection,
            which is not quite recent.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Facing to this, we’were not able to do simultanate connection even
            with a connection pool… The only way to solve this issue was to
            create our own ODBC package, but with the little time I was here, we
            didn’t. However, I handled most of the ODBC issues, with a lot of
            try / catch and verifications.
          </p>
          <div
            className={"block md:grid md:grid-cols-2 md:grid-rows-2 gap-2 my-4"}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Assets/Blog/Autoliv/connectToDatabase.png`}
              className={"my-2 shadow shadow-black rounded-xl"}
              alt=""
              style={{ gridArea: "1/1/3/2" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/Assets/Blog/Autoliv/createPool.png`}
              className={"my-2 shadow shadow-black rounded-xl"}
              alt=""
              style={{ gridArea: "1/2/2/3" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/Assets/Blog/Autoliv/req.png`}
              className={"my-2 shadow shadow-black rounded-xl"}
              alt=""
              style={{ gridArea: "2/2/3/3" }}
            />
          </div>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            On the other hand, the front-end was pretty simple to develop with
            React.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            I used React Router as page routing and also Axios to query our
            back-end.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            The following render is the main stock page which was required with
            a lot of constraint on filters and data arrangement.
          </p>
          <img
            className={"my-4 p-2 rounded-xl bg-white shadow"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Autoliv/mgh.png`}
            alt="MGH as High Height Shop"
          />
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            The app deployement took a bit of time because of React Router.
            Based on a Windows Server with IIS. Our browser was not correctly
            redirected to our pages. So, we’ve installed and configured a module
            named “urlrewrite” from Microsoft to handle React Router routes.
            After the installation, we just had to edit our web.config file and
            write the following code in.
          </p>
          <img
            className={"my-4 rounded-2xl shadow"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Autoliv/iis.png`}
            alt="IIS configuration"
          />
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            While my internship, I also fixed an issue from a JSP, converted an
            existing VBA program to PHP and made some data extractions.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            This internship was really interesting and I learned a lot from. My
            thanks goes to the Livbag’s IT Team.
          </p>
        </div>
      </div>
    </PostWrapper>
  );
};
export default InternshipAtAutoliv;
