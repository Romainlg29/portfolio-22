import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PostWrapper from "./Presenter/PostWrapper";
import PostHeader from "./PostHeader";
import InformationToast from "./Presenter/InformationToast";
import ParagraphImp from "./Presenter/ParagraphImp";
import CommentWrapper from "./Presenter/CommentWrapper";
import CodeBlock from "./Presenter/CodeBlock";
import CodeParagraph from "./Presenter/CodeParagraph";

const DockerizeWordpress = ({ title, date, id, isPhone }) => {
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
            src={`/Assets/Blog/Dockerize-Wordpress/header.png`}
            alt=""
          />
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Nowadays, more and more consumers are using Wordpress to develop
            their bussiness, especially in the cloud. So, this article will show
            you how to dockerize Wordpresss !
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            First of all, we must install docker and docker compose with: <br />{" "}
            <ParagraphImp setText={setInfoText}>
              apt install docker docker-compose
            </ParagraphImp>
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Once, you've installed Docker, move into{" "}
            <ParagraphImp setText={setInfoText}>/etc/docker</ParagraphImp> or
            create a new folder. Then make three folders, Wordpress, Mysql and
            Traefik. Beside Wordpress and Mysql, Traefik will be used to
            redirect all the requests to the correct container.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Then, you've done, create three files named{" "}
            <ParagraphImp setText={setInfoText}>
              docker-compose.yml
            </ParagraphImp>{" "}
            into each directory.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Now, we're going to create our first traefik container. It's going
            to redirect our traffic to the correct docker with the correct
            domain name. Get right into your{" "}
            <ParagraphImp setText={setInfoText}>
              docker-compose.yml
            </ParagraphImp>{" "}
            and copy and paste the following configuration.
          </p>

          <CodeBlock title={"traefik-compose.yml"} lang={"yaml"}>
            <CodeParagraph>version: "3.3"</CodeParagraph>
            <CodeParagraph>services:</CodeParagraph>
            <CodeParagraph tab={2}>
              traefik: #Here we're defining our service name
            </CodeParagraph>
            <CodeParagraph tab={4}>
              command: --providers.docker #Make Traefik able to detect our
              docker
            </CodeParagraph>
            <CodeParagraph tab={4}>
              image: traefik:v2.5 #Get Traefik image from Docker Hub
            </CodeParagraph>
            <CodeParagraph tab={4}>ports: #Open HTTP and HTTPS</CodeParagraph>
            <CodeParagraph tab={6}>- "443:443"</CodeParagraph>
            <CodeParagraph tab={6}>- "80:80"</CodeParagraph>
            <CodeParagraph tab={4}>restart: always</CodeParagraph>
            <CodeParagraph tab={4}>
              networks: #Apply a network to our container
            </CodeParagraph>
            <CodeParagraph tab={6}>- netw</CodeParagraph>
            <CodeParagraph tab={4}>
              volumes: #Create needed volumes
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - /var/run/docker.sock:/var/run/docker.sock #Same as the command
              line
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - /etc/docker/traefik/traefik.toml:/etc/traefik/traefik.toml #Link
              a local traefik.toml to the container file
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - /etc/docker/vols/traefik/acme.json:/acme.json #Same as above,
              this will handle Let's Encrypt certs
            </CodeParagraph>
            <CodeParagraph tab={4}>
              labels: #Traefik configuration label
            </CodeParagraph>
            <CodeParagraph tab={6}>
              "traefik.docker.network=netw" #Define the used network
            </CodeParagraph>
            <br />
            <CodeParagraph>networks: #Create our network</CodeParagraph>
            <CodeParagraph tab={2}>netw:</CodeParagraph>
            <CodeParagraph tab={4}>driver: bridge</CodeParagraph>
            <CodeParagraph tab={6}>ipam:</CodeParagraph>
            <CodeParagraph tab={8}>config:</CodeParagraph>
            <CodeParagraph tab={10}>
              - subnet: 192.168.4.0/24 #We must define a subnet, it'll be
              mandatory for mysql
            </CodeParagraph>
          </CodeBlock>

          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            In addition, run{" "}
            <ParagraphImp setText={setInfoText}>
              docker-compose up -d
            </ParagraphImp>{" "}
            and your first container should now be running. However, as you need
            to secure your customers and other people, we are going to use
            HTTPS.
          </p>
          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Go into your Traefik's volume and edit your{" "}
            <span className={"p-1 px-2 bg-blue-200 rounded-md"}>
              traefik.toml
            </span>{" "}
            and use this code. Note: If traefik.toml and acme.json doesn't
            exist, create them.
          </p>

          <CodeBlock title={"traefik.toml"} lang={"yaml"}>
            <CodeParagraph>[entryPoints]</CodeParagraph>
            <CodeParagraph tab={2}>[entryPoints.web]</CodeParagraph>
            <CodeParagraph tab={4}>address = ":80"</CodeParagraph>
            <CodeParagraph tab={4}>[entryPoints.web.http]</CodeParagraph>
            <CodeParagraph tab={6}>
              [entryPoints.web.http.redirections]
            </CodeParagraph>
            <CodeParagraph tab={8}>
              [entryPoints.web.http.redirections.entryPoint]
            </CodeParagraph>
            <CodeParagraph tab={10}>to = "websecure"</CodeParagraph>
            <CodeParagraph tab={10}>scheme = "https"</CodeParagraph>
            <CodeParagraph tab={10}>permanent = true</CodeParagraph>
            <CodeParagraph tab={2}>[entryPoints.websecure]</CodeParagraph>
            <CodeParagraph tab={4}>address = ":443"</CodeParagraph>
            <CodeParagraph tab={4}>[entryPoints.web.http.tls]</CodeParagraph>
            <CodeParagraph tab={6}>certResolver = "default"</CodeParagraph>

            <br />

            <CodeParagraph>[providers]</CodeParagraph>
            <CodeParagraph tab={2}>[providers.docker]</CodeParagraph>
            <CodeParagraph tab={4}>watch = true</CodeParagraph>
            <CodeParagraph tab={4}>exposedByDefault = false</CodeParagraph>
            <CodeParagraph tab={4}>network = "netw"</CodeParagraph>

            <br />

            <CodeParagraph>[certificatesResolvers]</CodeParagraph>
            <CodeParagraph tab={2}>
              [certificatesResolvers.default]
            </CodeParagraph>
            <CodeParagraph tab={4}>
              [certificatesResolvers.default.acme]
            </CodeParagraph>
            <CodeParagraph tab={6}>email = "YOUR_EMAIL"</CodeParagraph>
            <CodeParagraph tab={6}>storage = "./acme.json"</CodeParagraph>
            <CodeParagraph tab={6}>
              caServer = "https://acme-v01.api.letsencrypt.org/directory"
            </CodeParagraph>
            <CodeParagraph tab={4}>
              [certificatesResolvers.default.acme.tlsChallenge]
            </CodeParagraph>
          </CodeBlock>

          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Now, in your Traefik's docker-compose directory, use{" "}
            <ParagraphImp setText={setInfoText}>
              docker-compose down
            </ParagraphImp>{" "}
            and then{" "}
            <ParagraphImp setText={setInfoText}>
              docker-compose up -d
            </ParagraphImp>{" "}
          </p>

          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Secondly, we're going to setup our MySQL container. For this
            purpose, edit your docker-compose inside the mysql folder and add
            the following.
          </p>

          <CodeBlock title={"mysql-compose.yml"} lang={"yaml"}>
            <CodeParagraph>version: "3.7"</CodeParagraph>
            <CodeParagraph>services:</CodeParagraph>
            <CodeParagraph tab={2}>db:</CodeParagraph>
            <CodeParagraph tab={4}>
              image: mysql:5.7 # Get MySQL image from Docker Hub
            </CodeParagraph>
            <CodeParagraph tab={4}>
              volumes: #Create needed volumes
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - /etc/docker/vols/mysql:/var/lib/mysql
            </CodeParagraph>
            <CodeParagraph tab={4}>restart: always</CodeParagraph>
            <CodeParagraph tab={4}>expose: #Expose 3306</CodeParagraph>
            <CodeParagraph tab={6}>- "3306"</CodeParagraph>
            <CodeParagraph tab={4}>
              environment: #Define MySQL variables
            </CodeParagraph>
            <CodeParagraph tab={6}>
              MYSQL_ROOT_PASSWORD: YOUR_ROOT_PASSWORD
            </CodeParagraph>
            <CodeParagraph tab={6}>MYSQL_DATABASE: DEFAULT</CodeParagraph>
            <CodeParagraph tab={6}>MYSQL_USER: YOUR_CUSTOM_USER</CodeParagraph>
            <CodeParagraph tab={6}>
              MYSQL_PASSWORD: YOUR_CUSTOM_USER_PASSWORD
            </CodeParagraph>
            <CodeParagraph tab={4}>
              networks: #Link the Traefik network to our container and define a
              static IP.
            </CodeParagraph>
            <CodeParagraph tab={6}>wpnet:</CodeParagraph>
            <CodeParagraph tab={8}>ipv4_address: 192.168.4.100</CodeParagraph>

            <br />

            <CodeParagraph>
              networks: #Link to our Traefik network
            </CodeParagraph>
            <CodeParagraph tab={2}>wpnet:</CodeParagraph>
            <CodeParagraph tab={4}>external:</CodeParagraph>
            <CodeParagraph tab={6}>name: traefik_netw</CodeParagraph>
          </CodeBlock>

          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Same as Traefik, run{" "}
            <ParagraphImp setText={setInfoText}>
              docker-compose up -d
            </ParagraphImp>{" "}
            and your MySQL container should now be running.
          </p>

          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Thirdly, we remain to do our Wordpress docker. Go into your
            docker-compose and paste the following code.
          </p>

          <CodeBlock title={"wordpress-compose.yml"} lang={"yaml"}>
            <CodeParagraph>version: "3.7"</CodeParagraph>
            <CodeParagraph>services:</CodeParagraph>
            <CodeParagraph tab={2}>wp:</CodeParagraph>
            <CodeParagraph tab={4}>image: wordpress:latest</CodeParagraph>
            <CodeParagraph tab={4}>container_name: YOUR_WP_NAME</CodeParagraph>
            <CodeParagraph tab={4}>volumes:</CodeParagraph>
            <CodeParagraph tab={6}>
              - /etc/docker/vols/YOUR_WP_NAME:/var/www/html
            </CodeParagraph>
            <CodeParagraph tab={4}>
              expose: #Expose HTTP and HTTPS
            </CodeParagraph>
            <CodeParagraph tab={6}>- "80"</CodeParagraph>
            <CodeParagraph tab={6}>- "433"</CodeParagraph>
            <CodeParagraph tab={4}>restart: always</CodeParagraph>
            <CodeParagraph tab={4}>
              environment: #Define Wordpress variables
            </CodeParagraph>
            <CodeParagraph tab={6}>
              WORDPRESS_DB_HOST: 192.168.4.100:3306 #Here is our MySQL container
            </CodeParagraph>
            <CodeParagraph tab={6}>
              WORDPRESS_DB_USER: AN_USER_THAT_EXISTS_IN_MYSQL_CONTAINER
            </CodeParagraph>
            <CodeParagraph tab={6}>
              WORDPRESS_DB_PASSWORD:
              PASSWORD_OF_AN_USER_THAT_EXISTS_IN_MYSQL_CONTAINER
            </CodeParagraph>
            <CodeParagraph tab={6}>
              WORDPRESS_DB_NAME: DATABASE_THAT_EXISTS_IN_YOUR_MYSQL_CONTAINER
            </CodeParagraph>
            <CodeParagraph tab={4}>
              networks: #Link to the Traefik network
            </CodeParagraph>
            <CodeParagraph tab={6}>- wpnet</CodeParagraph>
            <CodeParagraph tab={4}>labels: #Traefik labels</CodeParagraph>
            <CodeParagraph tab={6}>
              - "traefik.docker.network=wpnet"
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - "traefik.backend=YOUR_WP_NAME"
            </CodeParagraph>
            <CodeParagraph tab={6}>- "traefik.enable=true"</CodeParagraph>
            <CodeParagraph tab={6}>
              -
              "traefik.http.routers.YOUR_WP_NAME.rule=Host(`YOUR_DOMAIN_HERE`)"
              #Ex google.com
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - "traefik.http.routers.YOUR_WP_NAME.entrypoints=websecure"
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - "traefik.http.services.YOUR_WP_NAME.loadbalancer.server.port=80"
            </CodeParagraph>
            <CodeParagraph tab={6}>- "traefik.port=80"</CodeParagraph>

            <br />

            <CodeParagraph>
              networks: #Link to our Traefik network
            </CodeParagraph>
            <CodeParagraph tab={2}>wpnet:</CodeParagraph>
            <CodeParagraph tab={4}>external:</CodeParagraph>
            <CodeParagraph tab={6}>name: traefik_netw</CodeParagraph>
          </CodeBlock>

          <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
            Finally, run your container. You should be able to request your
            website.
          </p>

          <CommentWrapper id={id} />
        </div>
      </div>
    </PostWrapper>
  );
};
export default DockerizeWordpress;
