import { MotionCanvas, LayoutCamera, motion } from "framer-motion/three";
import {
  Preload,
  RoundedBox,
  Scroll,
  ScrollControls,
  Stats,
  Text,
} from "@react-three/drei";
import Lights from "./Lights";
import DistortingSphere from "./Spheres/DistortingSphere";
import { intInInterval } from "../Utils/Operations";
import { MeshStandardMaterial } from "three";
import { useState } from "react";

const HomeScene = () => {
  const [lightTheme, setLightTheme] = useState(true);

  const tapVariants = {
    default: { x: 2.2, y: 1 },
    moving: { x: 1, y: 2 },
  };

  const [tap, setTap] = useState(false);

  return (
    <MotionCanvas
      dpr={[1, 2]}
      style={{
        backgroundColor: lightTheme ? "#F1F4F8" : "#0E0B07",
      }}
    >
      <Stats />
      <LayoutCamera position={[0, 0, 5]} />
      <Preload all />
      <ScrollControls pages={2} damping={3} distance={2}>
        <Scroll>
          <group>
            <motion.mesh
              position={[-3, 2, -3]}
              whileHover={{ scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.9, duration: 3 }}
            >
              <DistortingSphere
                roughness={0}
                metalness={lightTheme ? 0.95 : 0.05}
              />
            </motion.mesh>
            <motion.mesh
              animate={tap ? "moving" : "default"}
              position={[2.2, 1, -5]}
              variants={tapVariants}
              onTap={() => {
                setTap(!tap);
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.3, duration: 2 }}
            >
              <DistortingSphere
                roughness={0}
                metalness={lightTheme ? 0.95 : 0.05}
              />
            </motion.mesh>
            <motion.mesh
              position={[-1, -2, -4]}
              onTap={() => setLightTheme(!lightTheme)}
              whileTap={{ scale: 0 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}
            >
              <DistortingSphere
                roughness={0}
                metalness={lightTheme ? 0.95 : 0.05}
              />
            </motion.mesh>

            <Text
              position={[0, 0, 0]}
              scale={3}
              color={lightTheme ? "black" : "white"}
              font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
            >
              I'm Romain
            </Text>
            <Text
              position={[0, -0.3, -0.5]}
              scale={1.5}
              color={lightTheme ? "black" : "white"}
              font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
            >
              Student in software development
            </Text>
          </group>
        </Scroll>
      </ScrollControls>
      <Lights />
    </MotionCanvas>
  );
};
export default HomeScene;
