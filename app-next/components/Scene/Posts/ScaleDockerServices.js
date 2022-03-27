import PostHeader from "./PostHeader";
import { AnimatePresence } from "framer-motion";
import Paragraph from "./Presenter/Paragraph";
import InformationToast from "./Presenter/InformationToast";
import { useEffect, useRef, useState } from "react";
import PostWrapper from "./Presenter/PostWrapper";
import CommentWrapper from "./Presenter/CommentWrapper";
import ParagraphImp from "./Presenter/ParagraphImp";
import ParagraphHref from "./Presenter/ParagraphHref";
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
            src={`/Assets/Blog/Scale-Docker-Services/header.png`}
            alt=""
          />
          <Paragraph>
            Docker provides great functionalities, however, an automated way to
            scale your services is not included. That's why I'm going to share
            you how to do it. Within a couple of minutes!
          </Paragraph>

          <Paragraph>
            To make this working, we're going to use Python with the Docker
            client library which can connect to the Docker socket.
          </Paragraph>

          <Paragraph>
            Firstly, install Python and the library by running:{" "}
            <ParagraphImp setText={setInfoText}>
              apt install python && pip install docker
            </ParagraphImp>
          </Paragraph>

          <Paragraph>
            Then to ease your task, I published the code on{" "}
            <ParagraphHref
              href={"https://github.com/Romainlg29/docker-auto-scaling"}
            >
              Github
            </ParagraphHref>
            , you can clone it.
          </Paragraph>

          <Paragraph>
            I'm still going to explain you how does the function works! It's
            composed of two parts. The first one gets all the containers and the
            second one scales up or down.
          </Paragraph>

          <Paragraph>
            Firstly, we're getting the Docker socket. It's going to be used a
            lot because it's the link between our script and Docker.
          </Paragraph>

          <Paragraph>
            Secondly, we're listing all the containers. Right after, we're
            getting their service name. If the container service is already
            stored in our service list, the script append the cpu_usage and add
            one to replicas. Otherwise, it adds a dict that contains the
            cpu_usage and replicas to the list with the service name as the key.
          </Paragraph>

          <CodeBlock title={"Containers and services"}>
            <CodeParagraph>
              cList = dockerClient.containers.list()
            </CodeParagraph>
            <CodeParagraph>{"cgList = {}"}</CodeParagraph>
            <br />
            <CodeParagraph>for container in cList:</CodeParagraph>
            <br />
            <CodeParagraph tab={2}>
              service =
              container.attrs['Config']['Labels']['com.docker.swarm.service.name']
            </CodeParagraph>
            <br />
            <CodeParagraph tab={2}>try:</CodeParagraph>
            <br />
            <CodeParagraph tab={4}>
              cpu_usage =
              container.stats(stream=False)['cpu_stats']['cpu_usage']['total_usage']
              / container.stats(stream=False)['cpu_stats']['system_cpu_usage'] *
              100
            </CodeParagraph>
            <br />
            <CodeParagraph tab={4}>
              cgList[service]['cpu_usage'] += cpu_usage
            </CodeParagraph>
            <br />
            <CodeParagraph tab={4}>
              cgList[service]['replicas'] += 1
            </CodeParagraph>
            <br />
            <CodeParagraph tab={2}>except KeyError:</CodeParagraph>
            <br />
            <CodeParagraph tab={4}>
              cpu_usage =
              container.stats(stream=False)['cpu_stats']['cpu_usage']['total_usage']
              / container.stats(stream=False)['cpu_stats']['system_cpu_usage'] *
              100
            </CodeParagraph>
            <br />
            <CodeParagraph tab={4}>
              {
                "cgList[service] = {'cpu_usage': cpu_usage, 'cpu_usage_mean:': 0, 'replicas': 1}"
              }
            </CodeParagraph>
          </CodeBlock>

          <Paragraph>
            Finally, while looping through the list, we're calculating the mean
            of the cpu_usage for each service. As the result, if the mean is too
            high, we're scaling up the service. Else, we're scaling down the
            service.
          </Paragraph>

          <CodeBlock title={"Scaling"}>
            <CodeParagraph>for service in cgList:</CodeParagraph>
            <br />
            <CodeParagraph tab={2}>
              cgList[service]['cpu_usage_mean'] = cgList[service]['cpu_usage'] /
              cgList[service]['replicas']
            </CodeParagraph>
            <br />
            <CodeParagraph tab={2}>
              {"if cgList[service]['cpu_usage_mean'] > 70:"}
            </CodeParagraph>
            <br />
            <CodeParagraph tab={4}>
              dockerClient.services.get(service).scale(cgList[service]['replicas']
              + 1)
            </CodeParagraph>
            <br />
            <CodeParagraph tab={2}>
              {
                "elif cgList[service]['cpu_usage_mean'] < 30 and cgList[service]['replicas'] > 1:"
              }
            </CodeParagraph>
            <br />
            <CodeParagraph tab={4}>
              dockerClient.services.get(service).scale(cgList[service]['replicas']
              - 1)
            </CodeParagraph>
          </CodeBlock>

          <Paragraph>
            That's all you need to scale up and down docker services! Of course,
            you should use it with CRON or other programs to make it work. If
            you wish to use it every x seconds, you can clone my{" "}
            <ParagraphHref
              href={"https://github.com/Romainlg29/docker-auto-scaling"}
            >
              repository
            </ParagraphHref>{" "}
            and use the -t argument. Furthermore, it's a little bit more
            documented.
          </Paragraph>

          <CommentWrapper id={id} />
        </div>
      </div>
    </PostWrapper>
  );
};
export default DeployNextJS;
