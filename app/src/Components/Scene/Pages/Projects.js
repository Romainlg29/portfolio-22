import { Scroll, Text } from "@react-three/drei";
import GlassPanel from "../Images/GlassPanel";
import { motion } from "framer-motion-3d";

const Projects = ({ theme, setCursor, isPhone }) => {
  return (
    <Scroll>
      <group position={[0, -17, 0]}>
        {isPhone ? (
          <group position={[0, 1.6, 1]}>
            <Text
              scale={2}
              color={theme ? "black" : "white"}
              font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
            >
              Let's take a look at
            </Text>
            <Text
              position={[0, -0.2, 0]}
              scale={2}
              color={theme ? "black" : "white"}
              font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
            >
              my projects!
            </Text>
          </group>
        ) : (
          <Text
            position={[0, 1.5, 1]}
            scale={2}
            color={theme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            Let's take a look at my projects!
          </Text>
        )}

        <motion.mesh
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", bounce: 0.3, duration: 1 }}
        >
          <GlassPanel
            texture={`${
              process.env.PUBLIC_URL
            }/Assets/Projects/porfolio-header${theme ? "" : "-dark"}.png`}
            imageScale={0.7}
            setCursor={setCursor}
          />
          <Text
            position={[0, -1.2, 0]}
            scale={0.75}
            color={theme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            Portfolio 22
          </Text>
        </motion.mesh>
      </group>
    </Scroll>
  );
};
export default Projects;
