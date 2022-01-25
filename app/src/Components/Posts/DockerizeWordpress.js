import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PostHeader from "./PostHeader";
import InformationToast from "./Presenter/InformationToast";
import ParagraphImp from "./Presenter/ParagraphImp";

const DockerizeWordpress = ({ title, date, id }) => {
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
      <PostHeader title={title} date={date} id={id}/>
      <div className="w-11/12 lg:w-3/5 mt-2 md:mt-6">
        <img
          className={"my-4 p-2 rounded-xl bg-white shadow"}
          src={`${process.env.PUBLIC_URL}/Assets/Blog/Dockerize-Wordpress/header.png`}
          alt=""
        />
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Nowadays, more and more consumers are using Wordpress to develop their
          bussiness, especially in the cloud. So, this article will show you how
          to dockerize Wordpresss !
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
          Traefik. Beside Wordpress and Mysql, Traefik will be used to redirect
          all the requests to the correct container.
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Then, you've done, create three files named{" "}
          <ParagraphImp setText={setInfoText}>docker-compose.yml</ParagraphImp>{" "}
          into each directory.
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Now, we're going to create our first traefik container. It's going to
          redirect our traffic to the correct docker with the correct domain
          name. Get right into your{" "}
          <ParagraphImp setText={setInfoText}>docker-compose.yml</ParagraphImp>{" "}
          and copy and paste the following configuration.
        </p>
        <div
          className={
            "mb-2 text-gray-700 leading-8 p-2 px-4 bg-blue-100 rounded-lg overflow-x-auto"
          }
        >
          <p>version: "3.3"</p>
          <p>services:</p>
          <p>&nbsp;&nbsp;traefik: #Here we're defining our service name</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;command: --providers.docker #Make Traefik
            able to detect our docker
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;image: traefik:v2.5 #Get Traefik image from
            Docker Hub
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;ports: #Open HTTP and HTTPS</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "443:443"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "80:80"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;restart: always</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;networks: #Apply a network to our container
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- netw</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;volumes: #Create needed volumes</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            /var/run/docker.sock:/var/run/docker.sock #Same as the command line
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            /etc/docker/traefik/traefik.toml:/etc/traefik/traefik.toml #Link a
            local traefik.toml to the container file
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            /etc/docker/vols/traefik/acme.json:/acme.json #Same as above, this
            will handle Let's Encrypt certs
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;labels: #Traefik configuration label</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "traefik.docker.network=netw"
            #Define the used network
          </p>
          <p>networks: #Create our network</p>
          <p>&nbsp;&nbsp;netw:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;driver: bridge</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;ipam:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config:</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- subnet:
            192.168.4.0/24 #We must define a subnet, it'll be mandatory for
            mysql
          </p>
        </div>
        <p className={"mb-6 text-lg text-gray-700 text-center leading-8"}>
          Traefik - docker-compose.yml
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          In addition, run{" "}
          <ParagraphImp setText={setInfoText}>
            docker-compose up -d
          </ParagraphImp>{" "}
          and your first container should now be running. However, as you need
          to secure your customers and other people, we are going to use HTTPS.
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Go into your Traefik's volume and edit your{" "}
          <span className={"p-1 px-2 bg-blue-200 rounded-md"}>
            traefik.toml
          </span>{" "}
          and use this code. Note: If traefik.toml and acme.json doesn't exist,
          create them.
        </p>

        <div
          className={
            "mb-2 text-gray-700 leading-8 p-2 px-4 bg-blue-100 rounded-lg overflow-x-auto"
          }
        >
          <p>[entryPoints]</p>
          <p>&nbsp;&nbsp;[entryPoints.web]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;address = ":80"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;[entryPoints.web.http]</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[entryPoints.web.http.redirections]
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[entryPoints.web.http.redirections.entryPoint]
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to =
            "websecure"
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scheme =
            "https"
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;permanent
            = true
          </p>
          <p>&nbsp;&nbsp;[entryPoints.websecure]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;address = ":443"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;[entryPoints.web.http.tls]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;certResolver = "default"</p>
          <p>[providers]</p>
          <p>&nbsp;&nbsp;[providers.docker]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;watch = true</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;exposedByDefault = false</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;network = "netw"</p>

          <p>[certificatesResolvers]</p>
          <p>&nbsp;&nbsp;[certificatesResolvers.default]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;[certificatesResolvers.default.acme]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email = "YOUR_EMAIL"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;storage = "./acme.json"</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;caServer =
            "https://acme-v01.api.letsencrypt.org/directory"
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;[certificatesResolvers.default.acme.tlsChallenge]
          </p>
        </div>

        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Now, in your Traefik's docker-compose directory, use{" "}
          <ParagraphImp setText={setInfoText}>docker-compose down</ParagraphImp>{" "}
          and then{" "}
          <ParagraphImp setText={setInfoText}>
            docker-compose up -d
          </ParagraphImp>{" "}
        </p>

        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Secondly, we're going to setup our MySQL container. For this purpose,
          edit your docker-compose inside the mysql folder and add the
          following.
        </p>
        <div
          className={
            "mb-2 text-gray-700 leading-8 p-2 px-4 bg-blue-100 rounded-lg overflow-x-auto"
          }
        >
          <p>version: "3.5"</p>
          <p>services:</p>
          <p>&nbsp;&nbsp;db: #Here we're defining our service name</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;image: mysql:5.7 #Get MySQL image from
            Docker Hub
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;volumes: #Create needed volumes</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            /etc/docker/vols/mysql:/var/lib/mysql
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;restart: always</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;expose: #Expose 3306</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "3306"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;environment: #Define MySQL variables</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_ROOT_PASSWORD:
            YOUR_ROOT_PASSWORD
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_DATABASE: DEFAULT</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_USER: YOUR_CUSTOM_USER
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_PASSWORD:
            YOUR_CUSTOM_USER_PASSWORD
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;networks: #Link the Traefik network to our
            container and define a static IP.
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wpnet:</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ipv4_address:
            192.168.4.100
          </p>

          <p>networks: #Link to our Traefik network</p>
          <p>&nbsp;&nbsp;wpnet:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;external:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: traefik_netw</p>
        </div>
        <p className={"mb-6 text-lg text-gray-700 text-center leading-8"}>
          MySQL - docker-compose.yml
        </p>
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
        <div
          className={
            "mb-2 text-gray-700 leading-8 p-2 px-4 bg-blue-100 rounded-lg overflow-x-auto"
          }
        >
          <p>version: "3.3"</p>
          <p>services:</p>
          <p>&nbsp;&nbsp;wp:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;image: wordpress:latest</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;container_name: YOUR_WP_NAME</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;volumes:</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            /etc/docker/vols/YOUR_WP_NAME:/var/www/html
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;expose: #Expose HTTP and HTTPS</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "80"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "433"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;restart: always</p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;environment: #Define Wordpress variables
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORDPRESS_DB_HOST:
            192.168.4.100:3306 #Here is our MySQL container
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORDPRESS_DB_USER:
            AN_USER_THAT_EXISTS_IN_MYSQL_CONTAINER
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORDPRESS_DB_PASSWORD:
            PASSWORD_OF_AN_USER_THAT_EXISTS_IN_MYSQL_CONTAINER
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORDPRESS_DB_NAME:
            DATABASE_THAT_EXISTS_IN_YOUR_MYSQL_CONTAINER
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;networks: #Link to the Traefik network</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- wpnet</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;labels: #Traefik labels</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            "traefik.docker.network=wpnet"
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            "traefik.backend=YOUR_WP_NAME"
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            "traefik.enable=true"
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            "traefik.http.routers.YOUR_WP_NAME.rule=Host(`YOUR_DOMAIN_HERE`)"
            #Ex google.com
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            "traefik.http.routers.YOUR_WP_NAME.entrypoints=websecure"
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            "traefik.http.services.YOUR_WP_NAME.loadbalancer.server.port=80"
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "traefik.port=80"
          </p>

          <p>networks: #Link to our Traefik network</p>
          <p>&nbsp;&nbsp;wpnet:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;external:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: traefik_netw</p>
        </div>
        <p className={"mb-6 text-lg text-gray-700 text-center leading-8"}>
          Wordpress - docker-compose.yml
        </p>
        <p className={"mb-6 text-xl text-gray-700 text-center leading-8"}>
          Finally, run your container. You should be able to request your
          website.
        </p>
      </div>
    </motion.div>
  );
};
export default DockerizeWordpress;
