import { MotionCanvas } from "framer-motion/three";
import { Preload, ScrollControls, useCursor } from "@react-three/drei";
import Lights from "./Lights";
import { useState } from "react";
import Begin from "./Pages/Begin";
import Action from "./Pages/Action";
import Camera from "./Cameras/Camera";
import Articles from "./Pages/Articles";
import Projects from "./Pages/Projects";
import { BrowserRouter } from "react-router-dom";

const HomeScene = ({ isPhone }) => {
  const [cursor, setCursor] = useState(false);
  const [theme, setTheme] = useState(true);

  useCursor(cursor, "pointer", "auto");

  return (
    <MotionCanvas
      colorManagement
      dpr={[1, 2]}
      style={{
        backgroundColor: theme ? "#F1F4F8" : "#0E0B07",
      }}
    >
      <BrowserRouter>
        <Preload all />
        <ScrollControls pages={4} damping={4} distance={2}>
          <Camera isPhone={isPhone} />
          <Begin
            theme={theme}
            setTheme={() => setTheme(!theme)}
            setCursor={setCursor}
          />
          <Action theme={theme} />
          <Projects theme={theme} isPhone={isPhone} setCursor={setCursor} />
          <Articles theme={theme} isPhone={isPhone} setCursor={setCursor} />
        </ScrollControls>
        <Lights />
      </BrowserRouter>
    </MotionCanvas>
  );
};
export default HomeScene;
