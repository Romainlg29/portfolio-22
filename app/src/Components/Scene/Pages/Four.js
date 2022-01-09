import { Scroll, Tetrahedron, Text, Torus } from "@react-three/drei";
import { RoughMaterialRoyalBlue } from "../Materials";
import GlassPanel from "../Images/GlassPanel";
import RotatingCube from "../Cubes/RotatingCube";
import { motion } from "framer-motion/three";

const Four = ({ lightTheme, setCursor }) => {
  return (
    <Scroll>
      <group position={[0, -22, 0]}>
        <Text
          position={[0, 1.5, 1]}
          scale={2}
          color={lightTheme ? "black" : "white"}
          font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
        >
          And explore my latests posts!
        </Text>
        <GlassPanel
          texture={`${
            process.env.PUBLIC_URL
          }/Assets/Blog/Monitoring-Docker/header${
            lightTheme ? "" : "_dark"
          }.png`}
          imageScale={0.7}
          setCursor={setCursor}
        />
        <GlassPanel
          position={[0, -2.5, 0]}
          texture={`${
            process.env.PUBLIC_URL
          }/Assets/Blog/Dockerize-Wordpress/header${
            lightTheme ? "" : "_dark"
          }.png`}
          imageScale={0.7}
          setCursor={setCursor}
        />

        <Torus
          position={[-2, -1.75, -2]}
          rotation={[-Math.PI / 2, Math.PI / 6, 0]}
          scale={0.2}
          args={[2, 1, 48, 64]}
          material={RoughMaterialRoyalBlue}
        />

        <RotatingCube
          position={[2, 1.25, -1]}
          rotation={[-Math.PI / 2, Math.PI / 6, 0]}
          scale={0.6}
          material={RoughMaterialRoyalBlue}
          rotateOnZ
          rotateOnX
        />

        <Tetrahedron
          position={[1.5, -4.8, -1]}
          rotation={[Math.PI / 4, 0, Math.PI / 2]}
          scale={0.5}
          material={RoughMaterialRoyalBlue}
        />

        <motion.mesh
          position={[0, -3.8, -0.2]}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", bounce: 0.3, duration: 1 }}
          onPointerOver={() => setCursor(true)}
          onPointerOut={() => setCursor(false)}
        >
          <Text
            scale={1}
            color={lightTheme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            Show more
          </Text>
        </motion.mesh>
      </group>
    </Scroll>
  );
};
export default Four;
