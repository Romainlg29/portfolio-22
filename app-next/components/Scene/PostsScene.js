import { MotionCanvas } from "framer-motion-3d";
import { Preload, ScrollControls, useCursor } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense, useState } from "react";
import PostsPresenter from "./Posts/PostsPresenter";

const PostsScene = ({ isPhone }) => {
  const [cursor, setCursor] = useState(false);
  const [theme] = useState(true);

  useCursor(cursor, "pointer", "auto");

  return (
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
        <ScrollControls pages={isPhone ? 4.2 : 2.2} damping={4} distance={1}>
          <PostsPresenter
            setCursor={setCursor}
            theme={theme}
            isPhone={isPhone}
          />
        </ScrollControls>
        <Lights />
      </Suspense>
    </MotionCanvas>
  );
};
export default PostsScene;
