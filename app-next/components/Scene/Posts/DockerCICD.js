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

const DockerCICD = ({ title, date, id, isPhone }) => {
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
            src={`/Assets/Blog/Docker-Github-CI-CD/header.png`}
            alt=""
          />
          <Paragraph>
            Deploying a service can be quite a challenge. Moreover, if your app
            got a lot of iterations, you will need to deploy it multiple times.
            So, today, I'm going to show you how to automate this process with
            Docker and Github.
          </Paragraph>

          <Paragraph>
            How will it works? We're going to use Github Actions when a push
            occurs to run a script into our server that is going to clone and
            create the container.
          </Paragraph>

          <Paragraph>
            Firstly, we'll need to create an ssh access to your server to allow
            Github Actions to send the commands to your server.
          </Paragraph>

          <CodeBlock title={"CLI"} lang={"bash"}>
            <CodeParagraph>
              ssh-keygen -t ed25519 -C "you_github_mail@mail.com"
            </CodeParagraph>
            <CodeParagraph>
              # Don't use a custom file path, it's useless.
            </CodeParagraph>
            <CodeParagraph>
              # Then enter a passphrase to encrypt the key
            </CodeParagraph>
          </CodeBlock>

          <CodeBlock title={"CLI"} lang={"bash"}>
            <CodeParagraph>
              # We're adding our ssh key to our server authorized keys
            </CodeParagraph>
            <CodeParagraph>
              {"cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys"}
            </CodeParagraph>
            <br />
            <CodeParagraph>
              # Finally copy your private key and go to Github / your repo /
              settings / secrets / actions.
            </CodeParagraph>
            <CodeParagraph>cat ~/.ssh/id_ed25519</CodeParagraph>
          </CodeBlock>

          <Paragraph>
            At the actions page, add some repositories secrets.
          </Paragraph>

          <CodeBlock>
            <CodeParagraph>{"HOST --> Your hostname"}</CodeParagraph>
            <CodeParagraph>
              {"PORT --> If your port is 22, you don't need this secret."}
            </CodeParagraph>
            <CodeParagraph>{"USER --> A user"}</CodeParagraph>
            <CodeParagraph>
              {"SSHKEY (SSH in my case) --> Paste your private key here"}
            </CodeParagraph>
            <CodeParagraph>
              {
                "PASSPHRASE --> Write you passphrase here, if you didn't make one, you don't need this secret."
              }
            </CodeParagraph>
          </CodeBlock>

          <Paragraph>
            Once you've added the secrets, you can create a new file inside your
            repository. It MUST use the following path:{" "}
            <ParagraphImp setText={setInfoText}>
              /.github/workflows/whathever_you_want.yml
            </ParagraphImp>
            . If you need to add other actions, you'll simply add them into the
            .github/workflows/ folder.
          </Paragraph>

          <Paragraph>
            This file will create an action every time we made a push to a
            specific branch. You can use the following.
          </Paragraph>

          <CodeBlock lang={"yaml"} title={"deploy.yml"}>
            <CodeParagraph># Our workflow name</CodeParagraph>
            <CodeParagraph>name: Docker deployment</CodeParagraph>
            <br />
            <CodeParagraph>
              # To specify some branch, use the following
            </CodeParagraph>
            <CodeParagraph>on:</CodeParagraph>
            <CodeParagraph tab={2}>push:</CodeParagraph>
            <CodeParagraph tab={4}>branches:</CodeParagraph>
            <CodeParagraph tab={6}>- deployment</CodeParagraph>
            <br />
            <CodeParagraph># Or for a global use:</CodeParagraph>
            <CodeParagraph>#on: [push]</CodeParagraph>
            <br />
            <br />
            <CodeParagraph>
              # Here, we're creating our jobs / tasks to do when a push is done
            </CodeParagraph>
            <CodeParagraph>jobs:</CodeParagraph>
            <br />
            <CodeParagraph tab={2}>build:</CodeParagraph>
            <br />
            <CodeParagraph tab={4}># Using an ubuntu container</CodeParagraph>
            <CodeParagraph tab={4}>runs-on: ubuntu-latest</CodeParagraph>
            <br />
            <CodeParagraph tab={4}>
              # Every steps you would need should be there
            </CodeParagraph>
            <CodeParagraph tab={4}>steps:</CodeParagraph>
            <br />
            <CodeParagraph tab={6}>
              # Our first task is to check-out our commit
            </CodeParagraph>
            <CodeParagraph tab={6}>- uses: actions/checkout@v3</CodeParagraph>
            <br />
            <CodeParagraph tab={6}>
              # Now let's define how we're going to achieve an automatic
              deployment
            </CodeParagraph>
            <CodeParagraph tab={6}>
              # One of the fastest way is to make our server pulls the code from
              Github
            </CodeParagraph>
            <CodeParagraph tab={6}>
              # So we've to connect to our server and make it running a script
            </CodeParagraph>
            <br />
            <CodeParagraph tab={6}>- name: Clone and build</CodeParagraph>
            <br />
            <CodeParagraph tab={8}>
              # Using a specific action which enables us to remotely ssh
            </CodeParagraph>
            <CodeParagraph tab={8}>
              uses: appleboy/ssh-action@master
            </CodeParagraph>
            <br />
            <CodeParagraph tab={8}># We're passing our args</CodeParagraph>
            <CodeParagraph tab={8}>with:</CodeParagraph>
            <br />
            <CodeParagraph tab={10}>{"host: ${{secrets.HOST}}"}</CodeParagraph>
            <CodeParagraph tab={10}>
              {"username: ${{secrets.USER}}"}
            </CodeParagraph>
            <br />
            <CodeParagraph tab={10}>
              # You can use a password instead of your private key
            </CodeParagraph>
            <CodeParagraph tab={10}>
              {"#password: ${{secrets.PASSWORD}}"}
            </CodeParagraph>
            <CodeParagraph tab={10}>{"key: ${{secrets.SSH}}"}</CodeParagraph>
            <br />
            <CodeParagraph tab={10}>
              # If your ssh port is 22, the following line isn't mandatory
            </CodeParagraph>
            <CodeParagraph tab={10}>{"port: ${{secrets.PORT}}"}</CodeParagraph>
            <br />
            <CodeParagraph tab={10}>
              # if you encrypted your key with a passphrase add:
            </CodeParagraph>
            <CodeParagraph tab={10}>
              {"passphrase: ${{secrets.PASSPHRASE}}"}
            </CodeParagraph>
            <br />
            <CodeParagraph tab={10}>
              # Finally, we're running the command
            </CodeParagraph>
            <CodeParagraph tab={10}>
              script: /etc/docker/scripts/build.sh
            </CodeParagraph>
          </CodeBlock>

          <Paragraph>
            One thing is still missing. Indeed, we need to create a script into
            our server to build and deploy our service. I made the following.
          </Paragraph>

          <CodeBlock lang={"bash"} title={"build.sh"}>
            <CodeParagraph>#!/bin/bash</CodeParagraph>
            <br />
            <CodeParagraph>
              # Remove the old folder that contains our sources
            </CodeParagraph>
            <CodeParagraph>rm -rf /etc/docker/.../your_repo</CodeParagraph>
            <br />
            <CodeParagraph># Clone the repository from Git</CodeParagraph>
            <CodeParagraph>
              git clone -b your_branch https://github.com/you_user/your_repository.git
              /etc/docker/.../your_repo
            </CodeParagraph>
            <br />
            <CodeParagraph># Move to the Dockerfile location if you use COPY</CodeParagraph>
            <CodeParagraph>cd /etc/docker/.../your_repo/</CodeParagraph>
            <br/>
            <CodeParagraph>
              # Build the image with a Dockerfile from your repository
            </CodeParagraph>
            <CodeParagraph>
              docker build --no-cache -t your/image -f
              /etc/docker/.../your_repo/Dockerfile .
            </CodeParagraph>
            <br />
            <CodeParagraph>
              # Remove the old service and deploy the new one
            </CodeParagraph>
            <CodeParagraph>
              # If it's the first time you're using this script and you don't
              have your service deployed, it should return an error.
            </CodeParagraph>
            <CodeParagraph>
              # However, if you run it again and it should be fine.
            </CodeParagraph>
            <CodeParagraph>
              # That's because, it'll try to remove an unexistent service.
            </CodeParagraph>
            <CodeParagraph>
              docker service rm your_service && docker stack deploy -c
              /etc/docker/.../your_repo/docker-compose.yml your_stack
            </CodeParagraph>
          </CodeBlock>

          <Paragraph>
            Finally, try your action by pushing something new into your
            repository!
          </Paragraph>

          <img
            className={"my-4 rounded-xl shadow"}
            src={`/Assets/Blog/Docker-Github-CI-CD/action.png`}
            alt=""
          />

          <Paragraph>All should be working like a charm!</Paragraph>

          <CommentWrapper id={id} />
        </div>
      </div>
    </PostWrapper>
  );
};
export default DockerCICD;
