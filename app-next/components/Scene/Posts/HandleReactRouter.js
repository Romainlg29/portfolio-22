import PostHeader from "./PostHeader";
import { AnimatePresence } from "framer-motion";
import Paragraph from "./Presenter/Paragraph";
import ParagraphHref from "./Presenter/ParagraphHref";
import InformationToast from "./Presenter/InformationToast";
import { useEffect, useRef, useState } from "react";
import PostWrapper from "./Presenter/PostWrapper";
import CommentWrapper from "./Presenter/CommentWrapper";
import ParagraphImp from "./Presenter/ParagraphImp";
import CodeBlock from "./Presenter/CodeBlock";
import CodeParagraph from "./Presenter/CodeParagraph";

const MapWithGrafana = ({ title, date, id, isPhone }) => {
  const [infoText, setInfoText] = useState("");
  const [offsetHeight, setOffsetHeight] = useState(1);

  const docRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setOffsetHeight(document.documentElement.offsetHeight);
    setTimeout(() => {
      setHeight(docRef.current.clientHeight + 340);
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
            src={`/Assets/Blog/Handle-React-Router/header.png`}
            alt=""
          />
          <Paragraph>
            While upgrading my react app to the new React 18 rc, i was facing to
            an error. Indeed, React Router V5 doesn't support React 18. However,
            that's not a big concern, but they removed few options that we use
            to move from page to page in React Three Fiber. So, today, we're
            going to upgrade step by step our React 17 app with React Three
            Fiber included.
          </Paragraph>

          <Paragraph>
            Firstly, the main answer comes from :{" "}
            <ParagraphHref
              href={
                "https://stackoverflow.com/questions/69871987/react-router-v6-navigate-outside-of-components"
              }
            >
              Drew Reese
            </ParagraphHref>
          </Paragraph>

          <Paragraph>
            To begin with, start by updating all your existing packages to the
            latest version with{" "}
            <ParagraphImp setText={setInfoText}>npm update</ParagraphImp> or if
            you have some issues, use{" "}
            <ParagraphImp setText={setInfoText}>
              npm update --force
            </ParagraphImp>
          </Paragraph>

          <Paragraph>
            Then, install the latest version of React. For now, it's the React
            Release Candidate 3. You have to use :{" "}
            <ParagraphImp setText={setInfoText}>
              npm install react@rc react-dom@rc
            </ParagraphImp>
          </Paragraph>

          <Paragraph>
            React 18 depreacated ReactDom.render(), instead you must use :
          </Paragraph>
          <CodeBlock title={"index.js"} lang={"jsx"}>
            <CodeParagraph>
              import * as ReactDOMClient from "react-dom/client";
            </CodeParagraph>
            <CodeParagraph>
              ReactDOMClient.createRoot(document.getElementById("root")).render(
            </CodeParagraph>
            <CodeParagraph tab={2}>{"<React.StrictMode>"}</CodeParagraph>
            <CodeParagraph tab={4}>{"<App />"}</CodeParagraph>
            <CodeParagraph tab={2}>{"</React.StrictMode>"}</CodeParagraph>
            <CodeParagraph>);</CodeParagraph>
          </CodeBlock>

          <Paragraph>
            React 18 has replaced the default render methods by createRoot, it's
            enabling a{" "}
            <ParagraphHref
              href={"https://reactjs.org/docs/concurrent-mode-intro.html"}
            >
              concurrent rendering
            </ParagraphHref>
            , which will improve a lot our apps and make React Three Fiber
            faster!
          </Paragraph>

          <Paragraph>
            As you've done that, add to your {"<Canvas>...</Canvas"}, the mode
            prop : {'<Canvas mode="concurrent"></Canvas>'}
          </Paragraph>

          <Paragraph>You've successfully upgraded React!</Paragraph>

          <Paragraph>
            Now comes the delightful part about handling React Router 6 in React
            Three Fiber. It's quite easy. First of all, make sure you have
            react-router-dom v6 installed.
          </Paragraph>

          <Paragraph>
            We're going to use a new Router to handle the history because it was
            deleted in this new version. So, create a new file ThreeRouter.js
          </Paragraph>

          <CodeBlock title={"ThreeRouter.js"} lang={"jsx"}>
            <CodeParagraph>
              {'import { useLayoutEffect, useState } from "react";'}
            </CodeParagraph>
            <CodeParagraph>
              {'import { Router } from "react-router-dom";'}
            </CodeParagraph>
            <br />
            <CodeParagraph>
              {"const ThreeRouter = ({ history, ...props }) => {"}
            </CodeParagraph>
            <CodeParagraph tab={2}>
              {"const [state, setState] = useState({"}
            </CodeParagraph>
            <CodeParagraph tab={4}>{"action: history.action,"}</CodeParagraph>
            <CodeParagraph tab={4}>
              {"location: history.location,"}
            </CodeParagraph>
            <CodeParagraph tab={2}>{"});"}</CodeParagraph>
            <br />
            <CodeParagraph>
              {"useLayoutEffect(() => history.listen(setState), [history]);"}
            </CodeParagraph>
            <br />
            <CodeParagraph tab={2}>{"return ("}</CodeParagraph>
            <CodeParagraph tab={4}>{"<Router"}</CodeParagraph>
            <CodeParagraph tab={6}>{"{...props}"}</CodeParagraph>
            <CodeParagraph tab={6}>{"location={state.location}"}</CodeParagraph>
            <CodeParagraph tab={6}>
              {"navigationType={state.action}"}
            </CodeParagraph>
            <CodeParagraph tab={6}>{"navigator={history}"}</CodeParagraph>
            <CodeParagraph tab={4}>{"/>"}</CodeParagraph>
            <CodeParagraph tab={2}>);</CodeParagraph>
            <CodeParagraph>{"};"}</CodeParagraph>
            <CodeParagraph>export default ThreeRouter;</CodeParagraph>

            <CodeParagraph>
              {
                "// FROM https://stackoverflow.com/questions/69871987/react-router-v6-navigate-outside-of-components"
              }
            </CodeParagraph>
          </CodeBlock>

          <Paragraph>
            As you can see, our router now takes a history. Let's create a
            History.js component.
          </Paragraph>

          <CodeBlock title={"History.js"} lang={"jsx"}>
            <CodeParagraph>
              {'import { createBrowserHistory } from "history";'}
            </CodeParagraph>
            <CodeParagraph>
              {"export const history = createBrowserHistory();"}
            </CodeParagraph>
          </CodeBlock>

          <Paragraph>
            We're now going to share our component to our app. Simply wrap your
            App component by your router.
          </Paragraph>

          <CodeBlock title={"index.js"} lang={"jsx"}>
            <CodeParagraph>{'import { history } from "...";'}</CodeParagraph>
            <CodeParagraph>{'import ThreeRouter from "...";'}</CodeParagraph>
            <br />
            <CodeParagraph>{"<ThreeRouter history={history}>"}</CodeParagraph>
            <CodeParagraph tab={2}>{"<App/>"}</CodeParagraph>
            <CodeParagraph>{"</ThreeRouter>"}</CodeParagraph>
          </CodeBlock>

          <Paragraph>
            Your new router is now successfully implemented, it should work like
            a charm.
          </Paragraph>

          <Paragraph>
            Finally, to use your router inside your canvas component it's pretty
            simple, use :
          </Paragraph>

          <CodeBlock title={"Canvas.js"} lang={"jsx"}>
            <CodeParagraph>{'import { history } from "...";'}</CodeParagraph>
            <br />
            <CodeParagraph>{"// Your event or else..."}</CodeParagraph>
            <CodeParagraph>{"history.push(url);"}</CodeParagraph>
          </CodeBlock>

          <Paragraph>That's all! I hope this post helped you a lot!</Paragraph>

          <CommentWrapper id={id} />
        </div>
      </div>
    </PostWrapper>
  );
};
export default MapWithGrafana;
