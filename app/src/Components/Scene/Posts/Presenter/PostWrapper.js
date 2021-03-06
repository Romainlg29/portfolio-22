import { Scroll, ScrollControls, Preload } from "@react-three/drei";
import Lights from "../../Lights";
import { Canvas } from "@react-three/fiber";
import RandomMesh from "../../../Utils/RandomMesh";
import { Suspense } from "react";

const PostWrapper = ({ pages = 1, children, isPhone }) => {
  return (
    <Canvas
      mode="concurrent"
      colorManagement
      dpr={[1, 2]}
      camera={{ fov: 70 }}
      style={{
        backgroundColor: "#F1F4F8",
        width: "100%",
      }}
    >
      <Suspense fallback={null}>
        <Preload all />
        <ScrollControls pages={pages} damping={4} distance={2}>
          <Scroll html>{children}</Scroll>
          <Scroll>
            {!isPhone &&
              Array(pages === 0 ? 1 : Math.ceil(pages * 1.5))
                .fill(0)
                .map((_, k) => {
                  return (
                    <RandomMesh
                      key={`RandomMesh_${k}`}
                      position={[k % 2 === 0 ? 5.5 : -6, (k + 1) * -5, -1]}
                    />
                  );
                })}
          </Scroll>
        </ScrollControls>
        <Lights />
      </Suspense>
    </Canvas>
  );
};
export default PostWrapper;
