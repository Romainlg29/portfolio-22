import PostHeader from "./PostHeader";
import { AnimatePresence, motion } from "framer-motion";
import Paragraph from "./Presenter/Paragraph";
import CodeParagraph from "./Presenter/CodeParagraph";
import CodeBlock from "./Presenter/CodeBlock";
import ParagraphImp from "./Presenter/ParagraphImp";
import InformationToast from "./Presenter/InformationToast";
import { useEffect, useRef, useState } from "react";
import PostWrapper from "./Presenter/PostWrapper";
import CommentWrapper from "./Presenter/CommentWrapper";

const MonitorContainers = ({ title, date, id, isPhone }) => {
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
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Monitoring-Docker/header.png`}
            alt=""
          />
          <Paragraph>
            Nowadays, to provide the best QOF (Quality of services) to our
            clients, we must take carof many data. A lot of data... So, this
            article will deal with Prometheus and Grafana. I'm going to show you
            the installation process with Docker! Moreover, I'll be using
            Traefik as a reverse proxy.
          </Paragraph>

          <Paragraph>
            First of all, we're going to create our architecture. Inside{" "}
            <ParagraphImp setText={setInfoText}>/etc/docker</ParagraphImp> you
            have to create two folders, one named stacks, and the other logs.
            The first one will contain all your apps and the seconds one will be
            used by Prometheus and Grafana.
          </Paragraph>
          <Paragraph>
            Now create two new{" "}
            <ParagraphImp setText={setInfoText}>
              docker-compose.yml
            </ParagraphImp>{" "}
            in two separate folders.
          </Paragraph>
          <Paragraph>
            Copy and paste the following code to the prometheus docker-compose.
            Note: As I'm using Traefik, my containers will be inside a
            predefined network, adjust this as your use case.
          </Paragraph>
          <CodeBlock>
            <CodeParagraph>version: "3.3"</CodeParagraph>
            <br />
            <CodeParagraph>services:</CodeParagraph>
            <CodeParagraph tab={2}>
              prometheus: #Here we're defining our service name
            </CodeParagraph>
            <CodeParagraph tab={4}>
              command: --config.file=/etc/prometheus/prometheus.yml #Define
              configuration file path
            </CodeParagraph>
            <CodeParagraph tab={4}>image: prom/prometheus</CodeParagraph>
            <CodeParagraph tab={4}>expose:</CodeParagraph>
            <CodeParagraph tab={6}>
              - "80" #Expose port 80 to Traefik
            </CodeParagraph>
            <CodeParagraph tab={4}>
              networks: #Apply our network to the container
            </CodeParagraph>
            <CodeParagraph tab={6}>- netw</CodeParagraph>
            <CodeParagraph tab={4}>
              volumes: #Create needed volumes to store the data
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - /etc/docker/logs/prometheus:/etc/prometheus
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - /etc/docker/logs/prometheus-data:/prometheus
            </CodeParagraph>
            <CodeParagraph tab={4}>deploy: #With docker swarm</CodeParagraph>
            <CodeParagraph tab={6}>mode: replicated</CodeParagraph>
            <CodeParagraph tab={6}>replicas: 1</CodeParagraph>
            <CodeParagraph tab={6}>update_config:</CodeParagraph>
            <CodeParagraph tab={8}>parallelism: 1</CodeParagraph>
            <CodeParagraph tab={8}>delay: 10s</CodeParagraph>
            <CodeParagraph tab={6}>restart_policy:</CodeParagraph>
            <CodeParagraph tab={8}>condition: on-failure</CodeParagraph>
            <CodeParagraph tab={6}>labels:</CodeParagraph>

            <CodeParagraph tab={8}>
              - "traefik.docker.network=netw"
            </CodeParagraph>
            <CodeParagraph tab={8}>
              - "traefik.backend=prometheus"
            </CodeParagraph>
            <CodeParagraph tab={8}>- "traefik.enable=true"</CodeParagraph>
            <CodeParagraph tab={8}>
              -
              "traefik.http.routers.prometheus.rule=Host(`prometheus.YOUR_DOMAIN`)"
            </CodeParagraph>
            <CodeParagraph tab={8}>
              - "traefik.http.services.prometheus.loadbalancer.server.port=9090"
            </CodeParagraph>
            <br />
            <CodeParagraph tab={0}>
              networks: #Retrieve our network
            </CodeParagraph>
            <CodeParagraph tab={2}>netw:</CodeParagraph>
            <CodeParagraph tab={4}>external:</CodeParagraph>
            <CodeParagraph tab={6}>name: YOUR_STACK_netw</CodeParagraph>
          </CodeBlock>
          <Paragraph>Prometheus - docker-compose.yml</Paragraph>

          <Paragraph>
            In addition, we'll be adding the following code to our
            docker-compose to monitor cpu, ram... Just before our network
            retrieve field.
          </Paragraph>

          <CodeBlock>
            <CodeParagraph tab={2}>node_exporter:</CodeParagraph>
            <CodeParagraph tab={4}>image: prom/node-exporter</CodeParagraph>
            <CodeParagraph tab={4}>expose:</CodeParagraph>
            <CodeParagraph tab={6}>- "9100"</CodeParagraph>
            <CodeParagraph tab={4}>networks:</CodeParagraph>
            <CodeParagraph tab={6}>- netw</CodeParagraph>
            <CodeParagraph tab={4}>deploy: #With docker swarm</CodeParagraph>
            <CodeParagraph tab={6}>mode: replicated</CodeParagraph>
            <CodeParagraph tab={6}>replicas: 1</CodeParagraph>
            <CodeParagraph tab={6}>update_config:</CodeParagraph>
            <CodeParagraph tab={8}>parallelism: 1</CodeParagraph>
            <CodeParagraph tab={8}>delay: 10s</CodeParagraph>
            <CodeParagraph tab={6}>restart_policy:</CodeParagraph>
            <CodeParagraph tab={8}>condition: on-failure</CodeParagraph>
            <br />
            <CodeParagraph tab={2}>cadvisor:</CodeParagraph>
            <CodeParagraph tab={4}>
              image: gcr.io/cadvisor/cadvisor #From Google Cloud
            </CodeParagraph>
            <CodeParagraph tab={4}>expose:</CodeParagraph>
            <CodeParagraph tab={6}>- "8080"</CodeParagraph>
            <CodeParagraph tab={4}>networks:</CodeParagraph>
            <CodeParagraph tab={6}>- netw</CodeParagraph>
            <CodeParagraph tab={4}>volumes:</CodeParagraph>
            <CodeParagraph tab={6}>- /:/rootfs:ro</CodeParagraph>
            <CodeParagraph tab={6}>- /var/run:/var/run:rw</CodeParagraph>
            <CodeParagraph tab={6}>- /sys:/sys:ro</CodeParagraph>
            <CodeParagraph tab={6}>
              - /var/lib/docker/:/var/lib/docker:ro
            </CodeParagraph>
            <CodeParagraph tab={4}>deploy: #With docker swarm</CodeParagraph>
            <CodeParagraph tab={6}>mode: replicated</CodeParagraph>
            <CodeParagraph tab={6}>replicas: 1</CodeParagraph>
            <CodeParagraph tab={6}>update_config:</CodeParagraph>
            <CodeParagraph tab={8}>parallelism: 1</CodeParagraph>
            <CodeParagraph tab={8}>delay: 10s</CodeParagraph>
            <CodeParagraph tab={6}>restart_policy:</CodeParagraph>
            <CodeParagraph tab={8}>condition: on-failure</CodeParagraph>
          </CodeBlock>
          <Paragraph>Prometheus (end) - docker-compose.yml</Paragraph>
          <Paragraph>
            Now, you're intended to create a new file named prometheus.yml as we
            wrote in our docker-compose (Not beside your docker-compose). And
            copy the following.
          </Paragraph>
          <CodeBlock>
            <CodeParagraph tab={0}>global:</CodeParagraph>
            <CodeParagraph tab={2}>
              scrape_interval: 15s #Every 15s our targets will be fetched
            </CodeParagraph>
            <CodeParagraph tab={0}>scrape_configs: #Configs</CodeParagraph>
            <CodeParagraph tab={2}>
              - job_name 'prometheus' # Our first job
            </CodeParagraph>
            <CodeParagraph tab={4}>static_configs:</CodeParagraph>
            <CodeParagraph tab={6}>
              - targets: ['localhost:9090'] #Our logs will be collected as we're
              a target
            </CodeParagraph>
            <CodeParagraph tab={2}>- job_name 'node_exporter'</CodeParagraph>
            <CodeParagraph tab={4}>static_configs:</CodeParagraph>
            <CodeParagraph tab={6}>
              - targets: ['node_exporter_host:9100']
            </CodeParagraph>
            <CodeParagraph tab={2}>- job_name 'cadvisor'</CodeParagraph>
            <CodeParagraph tab={4}>static_configs:</CodeParagraph>
            <CodeParagraph tab={6}>
              - targets: ['cadvisor_host:8080']
            </CodeParagraph>
          </CodeBlock>
          <Paragraph>Prometheus - prometheus.yml</Paragraph>
          <Paragraph>
            All is now ready for Prometheus, start it with{" "}
            <ParagraphImp setText={setInfoText}>
              docker stack deploy -c path/docker-compose.yml project_name
            </ParagraphImp>{" "}
            With{" "}
            <ParagraphImp setText={setInfoText}>docker service ls</ParagraphImp>
            , You should see your container working!
          </Paragraph>
          <Paragraph>
            Finally, let's get started with Grafana! Edit and paste the
            following in your docker-compose.yml
          </Paragraph>
          <CodeBlock>
            <CodeParagraph tab={0}>version: "3.3"</CodeParagraph>
            <CodeParagraph tab={0}>services:</CodeParagraph>
            <CodeParagraph tab={2}>grafana: #Our service name</CodeParagraph>
            <CodeParagraph tab={4}>image: grafana/grafana</CodeParagraph>
            <CodeParagraph tab={4}>
              user: root #We must define our user
            </CodeParagraph>
            <CodeParagraph tab={4}>environment:</CodeParagraph>
            <CodeParagraph tab={6}>
              - GF_SECURITY_ADMIN_USER=YOUR_USER_TO_LOGIN
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - GF_SECURITY_ADMIN_PASSWORD=YOUR_PASSWORD
            </CodeParagraph>
            <CodeParagraph tab={6}>
              - GF_USERS_ALLOW_SIGN_UP=false
            </CodeParagraph>
            <CodeParagraph tab={4}>expose:</CodeParagraph>
            <CodeParagraph tab={6}>- "3000"</CodeParagraph>
            <CodeParagraph tab={4}>
              networks: #Apply our network to the container
            </CodeParagraph>
            <CodeParagraph tab={6}>- netw</CodeParagraph>
            <CodeParagraph tab={4}>volumes:</CodeParagraph>
            <CodeParagraph tab={6}>
              - /etc/docker/logs/grafana:/var/lib/grafana
            </CodeParagraph>
            <CodeParagraph tab={4}>deploy: #With docker swarm</CodeParagraph>
            <CodeParagraph tab={6}>mode: replicated</CodeParagraph>
            <CodeParagraph tab={6}>replicas: 1</CodeParagraph>
            <CodeParagraph tab={6}>update_config:</CodeParagraph>
            <CodeParagraph tab={8}>parallelism: 1</CodeParagraph>
            <CodeParagraph tab={8}>delay: 10s</CodeParagraph>
            <CodeParagraph tab={6}>restart_policy:</CodeParagraph>
            <CodeParagraph tab={8}>condition: on-failure</CodeParagraph>
            <CodeParagraph tab={6}>labels:</CodeParagraph>
            <CodeParagraph tab={8}>
              - "traefik.docker.network=netw"
            </CodeParagraph>
            <CodeParagraph tab={8}>- "traefik.backend=grafana"</CodeParagraph>
            <CodeParagraph tab={8}>- "traefik.enable=true"</CodeParagraph>
            <CodeParagraph tab={8}>
              - "traefik.http.routers.grafana.rule=Host(`monitor.YOUR_DOMAIN`)"
            </CodeParagraph>
            <CodeParagraph tab={8}>
              - "traefik.http.services.grafana.loadbalancer.server.port=3000"
            </CodeParagraph>
            <CodeParagraph tab={8}>- "traefik.port=80"</CodeParagraph>
            <CodeParagraph tab={0}>
              networks: #Retrieve our network
            </CodeParagraph>
            <CodeParagraph tab={2}>netw:</CodeParagraph>
            <CodeParagraph tab={4}>external:</CodeParagraph>
            <CodeParagraph tab={6}>name: YOUR_STACK_netw</CodeParagraph>
          </CodeBlock>
          <Paragraph>Grafana - docker-compose.yml</Paragraph>
          <Paragraph>
            Now, same as Prometheus, start it with{" "}
            <ParagraphImp setText={setInfoText}>
              docker stack deploy -c path/docker-compose.yml project_name
            </ParagraphImp>{" "}
            and check if all is right! Then, go on your website url, you should
            get a similar screen. Your credentials are the same as the one
            written in your docker-compose file.
          </Paragraph>
          <img
            className={"my-4 rounded-2xl shadow-md shadow-purple-200"}
            src={`${process.env.PUBLIC_URL}/Assets/Blog/Monitoring-Docker/grafana_login.png`}
            alt=""
          />
          <Paragraph>
            And here you're! Finally, add your first data source with the rights
            params and then create your very own dashboard. Or otherwise, go on
            Grafana website to pick a template!
          </Paragraph>

          <CommentWrapper id={id} />

        </div>
      </div>
    </PostWrapper>
  );
};
export default MonitorContainers;
