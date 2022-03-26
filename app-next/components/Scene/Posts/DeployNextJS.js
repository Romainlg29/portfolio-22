import PostHeader from "./PostHeader";
import { AnimatePresence } from "framer-motion";
import Paragraph from "./Presenter/Paragraph";
import InformationToast from "./Presenter/InformationToast";
import { useEffect, useRef, useState } from "react";
import PostWrapper from "./Presenter/PostWrapper";
import CommentWrapper from "./Presenter/CommentWrapper";
import ParagraphImp from "./Presenter/ParagraphImp";
import CodeBlock from "./Presenter/CodeBlock";
import CodeParagraph from "./Presenter/CodeParagraph";

const DeployNextJS = ({ title, date, id, isPhone }) => {
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
            NextJS allow you to deploy React apps with improvements like SSR
            very easily. Today, we're going to deploy one within 5 minutes with
            Docker!
          </Paragraph>

          <Paragraph>
            Firstly, make sure you have Docker and Docker Compose installed on
            your machine. Otherwise, run{" "}
            <ParagraphImp setText={setInfoText}>
              apt install docker docker-compose
            </ParagraphImp>
          </Paragraph>

          <Paragraph>
            Inside your NextJS project, add the following Dockerfile.
          </Paragraph>

          <CodeBlock title={"Dockerfile"}>
            <CodeParagraph>
              # Here we're using alpine to get a small image
            </CodeParagraph>
            <CodeParagraph>FROM node:16-alpine</CodeParagraph>
            <br />
            <CodeParagraph># Loading our port as ENV</CodeParagraph>
            <CodeParagraph>ENV PORT 3000</CodeParagraph>
            <br />
            <CodeParagraph>
              # Creating the app folder and setting up as WORKDIR
            </CodeParagraph>
            <CodeParagraph>RUN mkdir /app</CodeParagraph>
            <CodeParagraph>WORKDIR /app</CodeParagraph>
            <br />
            <CodeParagraph>
              # Getting package.json and others to install all the required Node
              packages
            </CodeParagraph>
            <CodeParagraph>COPY package*.json /app/</CodeParagraph>
            <CodeParagraph>RUN npm install</CodeParagraph>
            <br />
            <CodeParagraph>
              # Copying and building our app to production
            </CodeParagraph>
            <CodeParagraph>COPY . /app/</CodeParagraph>
            <CodeParagraph>RUN npm run build</CodeParagraph>
            <br />
            <CodeParagraph>
              # Finally, exposing and running our app inside our container
            </CodeParagraph>
            <CodeParagraph>EXPOSE 3000</CodeParagraph>
            <CodeParagraph>CMD "npm" "start"</CodeParagraph>
          </CodeBlock>

          <Paragraph>
            You can now send your project to your server. And run you Dockerfile
            via:{" "}
            <ParagraphImp setText={setInfoText}>
              docker build --no-cache -t your_name/your_tag -f Dockerfile .
            </ParagraphImp>
            If you don't have any errors, you should be able to see your image
            by running :{" "}
            <ParagraphImp setText={setInfoText}>docker image ls</ParagraphImp>
          </Paragraph>

          <Paragraph>Let's create a compose file to deploy your app.</Paragraph>

          <CodeBlock title={"docker-compose.yml"}>
            <CodeParagraph>version: '3.3'</CodeParagraph>
            <br />
            <CodeParagraph>services:</CodeParagraph>
            <CodeParagraph tab={2}>your_service_name:</CodeParagraph>
            <CodeParagraph tab={4}>
              image: your_name/your_tag # Or whatever you wrote
            </CodeParagraph>
            <CodeParagraph tab={4}>networks:</CodeParagraph>
            <CodeParagraph tab={6}>- web</CodeParagraph>
            <CodeParagraph tab={4}>
              deploy: # Deploy via docker stack
            </CodeParagraph>
            <CodeParagraph tab={6}>mode: replicated</CodeParagraph>
            <CodeParagraph tab={6}>replicas: 1</CodeParagraph>
            <CodeParagraph tab={6}>restart_policy:</CodeParagraph>
            <CodeParagraph tab={8}>condition: on-failure</CodeParagraph>
            <CodeParagraph tab={6}>
              labels: # I'm using Traefik as a reverse proxy
            </CodeParagraph>
            <CodeParagraph tab={8}>- "traefik.enable=true"</CodeParagraph>
            <CodeParagraph tab={8}>
              - "traefik.docker.network=web"
            </CodeParagraph>
            <CodeParagraph tab={8}>
              - "traefik.http.routers.your_router.entrypoints=web,websecure"
            </CodeParagraph>
            <CodeParagraph tab={8}>
              - "traefik.http.routers.your_router.rule=Host(`my.host.com`)"
            </CodeParagraph>
            <CodeParagraph tab={8}>
              -
              "traefik.http.services.your_router.loadbalancer.server.port=3000"
              # I'm setting up the reverse proxy to target 3000 as we defined in
              the Dockerfile.
            </CodeParagraph>
            <CodeParagraph tab={8}>- "traefik.port=80"</CodeParagraph>
            <br />
            <CodeParagraph>networks:</CodeParagraph>
            <CodeParagraph tab={2}>web:</CodeParagraph>
            <CodeParagraph tab={4}>external:</CodeParagraph>
            <CodeParagraph tab={6}>name: web</CodeParagraph>
          </CodeBlock>

          <Paragraph>
            Finally, run{" "}
            <ParagraphImp setText={setInfoText}>
              docker stack deploy -c docker-compose.yml your_stack
            </ParagraphImp>
          </Paragraph>

          <Paragraph>All should be working great!</Paragraph>

          <CommentWrapper id={id} />
        </div>
      </div>
    </PostWrapper>
  );
};
export default DeployNextJS;
