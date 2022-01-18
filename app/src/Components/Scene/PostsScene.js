import { MotionCanvas } from "framer-motion/three";
import {
  Preload,
  ScrollControls,
  useCursor,
} from "@react-three/drei";
import Lights from "./Lights";
import { useState } from "react";
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
      }}
    >
      <Preload all />
      <ScrollControls pages={isPhone ? 1.85 : 1.25} damping={4} distance={2}>
        <PostsPresenter setCursor={setCursor} theme={theme} isPhone={isPhone} />
      </ScrollControls>
      <Lights />
    </MotionCanvas>
  );
};
export default PostsScene;
