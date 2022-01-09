import { MotionCanvas } from "framer-motion/three";
import { Preload, ScrollControls, useCursor } from "@react-three/drei";
import Lights from "./Lights";
import { useState } from "react";
import One from "./Pages/One";
import Two from "./Pages/Two";
import Camera from "./Camera";
import Four from "./Pages/Four";
import Three from "./Pages/Three";
const HomeScene = ({ isPhone }) => {
  const [lightTheme, setLightTheme] = useState(true);

  const [cursor, setCursor] = useState(false);

  useCursor(cursor, "pointer", "auto");

  return (
    <MotionCanvas
      colorManagement
      dpr={[1, 2]}
      style={{
        backgroundColor: lightTheme ? "#F1F4F8" : "#0E0B07",
      }}
    >
      <Preload all />
      <ScrollControls pages={4} damping={4} distance={2}>
        <Camera isPhone={isPhone} />
        <One
          lightTheme={lightTheme}
          setLightTheme={setLightTheme}
          setCursor={setCursor}
        />
        <Two lightTheme={lightTheme} />
        <Three
          lightTheme={lightTheme}
          isPhone={isPhone}
          setCursor={setCursor}
        />
        <Four lightTheme={lightTheme} isPhone={isPhone} setCursor={setCursor} />
      </ScrollControls>
      <Lights />
    </MotionCanvas>
  );
};
export default HomeScene;
