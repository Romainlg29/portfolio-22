import { Scroll, Text } from "@react-three/drei";
import GlassPanel from "../Images/GlassPanel";
import { motion } from "framer-motion/three";

const Three = ({ lightTheme, setCursor }) => {
  return (
    <Scroll>
      <group position={[0, -17, 0]}>
        <Text
          position={[0, 1.5, 1]}
          scale={2}
          color={lightTheme ? "black" : "white"}
          font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
        >
          Let's take a look at my projects!
        </Text>

        <motion.mesh>
          <GlassPanel
            texture={`${process.env.PUBLIC_URL}/Assets/Projects/porfolio-header.png`}
            imageScale={0.7}
            setCursor={setCursor}
          />
          <Text
            position={[0, -1.2, 0]}
            scale={0.75}
            color={lightTheme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            Portfolio 22
          </Text>
        </motion.mesh>
      </group>
    </Scroll>
  );
};
export default Three;
