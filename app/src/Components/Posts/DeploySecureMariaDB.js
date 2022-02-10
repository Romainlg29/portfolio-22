import PostHeader from "./PostHeader";
import { AnimatePresence, motion } from "framer-motion";
import Paragraph from "./Presenter/Paragraph";
import CodeParagraph from "./Presenter/CodeParagraph";
import CodeBlock from "./Presenter/CodeBlock";
import ParagraphImp from "./Presenter/ParagraphImp";
import InformationToast from "./Presenter/InformationToast";
import { useState } from "react";

const MonitorContainers = ({ title, date, id }) => {
  const [infoText, setInfoText] = useState("");

  return (
    <motion.div
      className="w-screen h-screen flex flex-col items-center overflow-y-scroll"
      style={{ backgroundColor: "#F1F4F8" }}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <AnimatePresence exitBeforeEnter>
        {infoText && infoText !== "" ? (
          <InformationToast text={infoText} setText={setInfoText} />
        ) : null}
      </AnimatePresence>
      <PostHeader title={title} date={date} id={id} />
      <div className="w-11/12 lg:w-3/5 mt-2 md:mt-6">
        <img
          className={"my-4 p-2 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Deploy-MariaDB/header.png`}
          alt=""
        />
        <Paragraph>
          Docker brings great functionalities, however, with great
          functionalities comes great responsibility. Storing your data must be
          important at every step of a project. Moreover, GDRP must be respected
          to enter in the european market!
        </Paragraph>
        <Paragraph>
          Today, we're going to do a step by step install of a MariaDB on Docker
          Swarm!
        </Paragraph>
        <Paragraph>
          First of all, I assume that you already installed Docker and Docker
          compose. Once, get into you desired directory and create a new
          docker-compose file with{" "}
          <ParagraphImp setText={setInfoText}>
            touch docker-compose.yml
          </ParagraphImp>
          . For the moment, we'll not be editing it.
        </Paragraph>
        <Paragraph>
          Now, the question is where to store passwords that can be share on the
          network? The answer is Secret. Indeed, Docker brings a command that
          allow us to store secret and share it in the network.
        </Paragraph>
        <Paragraph>
          The command is{" "}
          <ParagraphImp setText={setInfoText}>docker secret args</ParagraphImp>.
          To follow the instructions provided by Docker, the most secure way is
          by writting it in a file instead of directly writing it in our
          termnial. To begin with, create a file to store the root password, it
          must be ended with{" "}
          <ParagraphImp setText={setInfoText} command={"nano root-pwd.json"}>
            .json
          </ParagraphImp>
          . Before creating our secret run:{" "}
          <ParagraphImp setText={setInfoText}>
            sed $'s/[^[:print:]\t]//g' your_file.json
          </ParagraphImp>
          , it'll remove all extra characters. Then you must simply execute the
          following command:{" "}
          <ParagraphImp setText={setInfoText}>
            docker secret create root-pwd /path/to/your/file.json
          </ParagraphImp>
          . Your password is now created! Don't forget to delete this file.
        </Paragraph>
        <Paragraph>
          Secondly, edit the previously created docker-compose file and paste
          the following code.
        </Paragraph>
        <CodeBlock>
          <CodeParagraph>version: "3.3"</CodeParagraph>
          <br />
          <CodeParagraph></CodeParagraph>
          <CodeParagraph>services:</CodeParagraph>
          <CodeParagraph tab={2}>mariadb:</CodeParagraph>
          <CodeParagraph tab={4}>image: mariadb</CodeParagraph>
          <CodeParagraph tab={4}>volumes:</CodeParagraph>
          <CodeParagraph tab={6}>
            - /path/to/store/mariadb/data:/var/lib/mysql:rw
          </CodeParagraph>
          <CodeParagraph tab={6}>
            - /path/to/store/your/config:/etc/mysql/conf.d:ro
          </CodeParagraph>
          <CodeParagraph tab={4}>networks:</CodeParagraph>
          <CodeParagraph tab={6}>- local</CodeParagraph>
          <CodeParagraph tab={4}>deploy:</CodeParagraph>
          <CodeParagraph tab={6}>mode: replicated</CodeParagraph>
          <CodeParagraph tab={6}>replicas: 1</CodeParagraph>
          <CodeParagraph tab={6}>update_config:</CodeParagraph>
          <CodeParagraph tab={8}>parallelism: 1</CodeParagraph>
          <CodeParagraph tab={8}>delay: 10s</CodeParagraph>
          <CodeParagraph tab={6}>restart_policy:</CodeParagraph>
          <CodeParagraph tab={8}>condition: on-failure</CodeParagraph>
          <CodeParagraph tab={4}>environment:</CodeParagraph>
          <CodeParagraph tab={8}>
            -
            MARIADB_ROOT_PASSWORD_FILE=/run/secrets/the-name-you-gave-to-your-secret
          </CodeParagraph>
          <CodeParagraph tab={4}>secrets:</CodeParagraph>
          <CodeParagraph tab={8}>
            - the-name-you-gave-to-your-secret
          </CodeParagraph>
          <br />
          <CodeParagraph>
            networks: #Change your networks as you want
          </CodeParagraph>
          <CodeParagraph tab={2}>local:</CodeParagraph>
          <CodeParagraph tab={4}>external:</CodeParagraph>
          <CodeParagraph tab={6}>name: local</CodeParagraph>
          <br />
          <CodeParagraph>secrets:</CodeParagraph>
          <CodeParagraph tab={2}>
            the-name-you-gave-to-your-secret:
          </CodeParagraph>
          <CodeParagraph tab={4}>external: true</CodeParagraph>
        </CodeBlock>
        <Paragraph>MariaDB - docker-compose.yml</Paragraph>

        <Paragraph>
          Finally, you can run your stack. All should be working!
        </Paragraph>
      </div>
    </motion.div>
  );
};
export default MonitorContainers;
