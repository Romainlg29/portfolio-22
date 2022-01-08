import { useState } from "react";
import { MotionCanvas } from "framer-motion/three";
import { Preload, ScrollControls, Stats, useCursor } from "@react-three/drei";

import Lights from "./Lights";
import Camera from "./Camera";
const TestScene = () => {
  const [lightTheme, setLightTheme] = useState(true);
  const [cursor, setCursor] = useState(false);
  useCursor(cursor, "pointer", "auto");

  return (
    <MotionCanvas
      dpr={[1, 2]}
      style={{
        backgroundColor: lightTheme ? "#F1F4F8" : "#0E0B07",
      }}
    >
      <Stats />
      <Preload all />
      <ScrollControls pages={1} damping={1} distance={2}>
        <Camera />
      </ScrollControls>
      <Lights />
    </MotionCanvas>
  );
};
export default TestScene;
