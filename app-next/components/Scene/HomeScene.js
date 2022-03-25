import { MotionCanvas } from "framer-motion-3d";
import { Preload, ScrollControls, useCursor } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense, useEffect, useState } from "react";
import Begin from "./Pages/Begin";
import Action from "./Pages/Action";
import Camera from "./Cameras/Camera";
import Articles from "./Pages/Articles";
import Projects from "./Pages/Projects";
import Medias from "./Pages/Medias";

const HomeScene = ({ isPhone }) => {
  const [render, setRender] = useState(false);

  const [cursor, setCursor] = useState(false);
  const [theme, setTheme] = useState(true);

  useCursor(cursor, "pointer", "auto");

  useEffect(() => {
    setRender(true);
  });

  return (
    render && (
      <MotionCanvas
        colorManagement
        dpr={[1, 2]}
        style={{
          backgroundColor: theme ? "#F1F4F8" : "#0E0B07",
          width: "100%",
        }}
      >
        <Suspense fallback={null}>
          <Preload all />
          <ScrollControls
            pages={isPhone ? 2.75 : 2.85}
            damping={4}
            distance={2}
          >
            <Camera isPhone={isPhone} />
            <Begin
              theme={theme}
              setTheme={() => setTheme(!theme)}
              setCursor={setCursor}
            />
            <Action theme={theme} isPhone={isPhone} />
            <Projects theme={theme} isPhone={isPhone} setCursor={setCursor} />
            <Articles theme={theme} isPhone={isPhone} setCursor={setCursor} />
            <Medias theme={theme} isPhone={isPhone} setCursor={setCursor} />
          </ScrollControls>
          <Lights />
        </Suspense>
      </MotionCanvas>
    )
  );
};
export default HomeScene;
