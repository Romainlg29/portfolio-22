import { MotionCanvas } from "framer-motion/three";
import { Scroll, ScrollControls, Preload } from "@react-three/drei";
import Lights from "../../Lights";

const PostWrapper = ({ pages = 1, children }) => {
  return (
    <MotionCanvas
      colorManagement
      dpr={[1, 2]}
      style={{
        backgroundColor: "#F1F4F8",
        width: "100%",
      }}
    >
      <Preload all />
      <ScrollControls pages={pages} damping={4} distance={.7}>
        <Scroll html>
          {children}
        </Scroll>
      </ScrollControls>
      <Lights />
    </MotionCanvas>
  );
};
export default PostWrapper;
