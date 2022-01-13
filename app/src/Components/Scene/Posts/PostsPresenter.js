import {
  RoundedBox,
  Scroll,
  Tetrahedron,
  Text,
  Torus,
} from "@react-three/drei";
import GlassPanel from "../Images/GlassPanel";
import { motion } from "framer-motion/three";
import { RoughMaterialRoyalBlue } from "../Materials";

const PostsPresenter = ({ setCursor, theme, isPhone }) => {
  return (
    <Scroll>
      <motion.mesh
        position={[0, 3.5, 0]}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", bounce: 0.3, duration: 1 }}
        onPointerOver={() => setCursor(true)}
        onPointerOut={() => setCursor(false)}
        onClick={() => window.appHistory.push("/")}
      >
        <Text
          scale={1.5}
          color={theme ? "black" : "white"}
          font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
        >
          Go back
        </Text>
      </motion.mesh>
      <Text
        position={[0, 3, 0]}
        scale={3}
        color={theme ? "black" : "white"}
        font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
      >
        Explore my posts!
      </Text>
      <group position={[0, 1, 0]}>
        <GlassPanel
          position={isPhone ? [0, 0, 0] : [-2, 0, 0]}
          texture={`${
            process.env.PUBLIC_URL
          }/Assets/Blog/Monitoring-Docker/header${theme ? "" : "_dark"}.png`}
          imageScale={0.7}
          setCursor={setCursor}
          onClick={() =>
            window.appHistory.push("/posts/monitor-with-prometheus-and-grafana")
          }
        />

        <GlassPanel
          position={isPhone ? [0, -2.5, 0] : [2, 0, 0]}
          texture={`${
            process.env.PUBLIC_URL
          }/Assets/Blog/Dockerize-Wordpress/header${theme ? "" : "_dark"}.png`}
          imageScale={0.7}
          setCursor={setCursor}
          onClick={() => window.appHistory.push("/posts/dockerize-wordpress")}
        />

        <GlassPanel
          position={isPhone ? [0, -5, 0] : [-2, -2.5, 0]}
          texture={`${process.env.PUBLIC_URL}/Assets/Blog/Autoliv/header${
            theme ? "" : "_dark"
          }.png`}
          imageScale={0.7}
          setCursor={setCursor}
          onClick={() => window.appHistory.push("/posts/internship-at-autoliv")}
        />

        <GlassPanel
          position={isPhone ? [0, -7.5, 0] : [2, -2.5, 0]}
          texture={`${process.env.PUBLIC_URL}/Assets/Blog/Cryptomator/header${
            theme ? "" : "_dark"
          }.png`}
          imageScale={0.7}
          setCursor={setCursor}
          onClick={() =>
            window.appHistory.push("/posts/enhance-your-syncing-security")
          }
        />

        <GlassPanel
          position={isPhone ? [0, -10, 0] : [-2, -5, 0]}
          texture={`${process.env.PUBLIC_URL}/Assets/Blog/Syncthing/header${
            theme ? "" : "_dark"
          }.png`}
          imageScale={0.7}
          setCursor={setCursor}
          onClick={() =>
            window.appHistory.push(
              "/posts/how-to-synchronize-your-devices-easily"
            )
          }
        />
      </group>
      <group>
        <RoundedBox
          position={[4.5, 3, -1]}
          rotation={[-Math.PI / 2, Math.PI / 6, 0]}
          scale={0.6}
          material={RoughMaterialRoyalBlue}
        />

        <Tetrahedron
          position={[-4.5, -1.75, -1]}
          rotation={[-Math.PI / 4, 0, Math.PI / 2]}
          scale={0.5}
          material={RoughMaterialRoyalBlue}
        />

        <Torus
          position={[2, -5.5, -1]}
          rotation={[Math.PI / 2, Math.PI / 6, 0]}
          scale={0.2}
          args={[2, 1, 48, 64]}
          material={RoughMaterialRoyalBlue}
        />
      </group>
    </Scroll>
  );
};
export default PostsPresenter;
