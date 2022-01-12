import { MotionCanvas } from "framer-motion/three";
import { Preload, RoundedBox, Tetrahedron, Torus } from "@react-three/drei";
import { LayoutCamera } from "framer-motion/three";

import Lights from "./Lights";
import { RoughMaterialRoyalBlue } from "./Materials";
import { useState } from "react";

const PostScene = () => {
  const [theme, setTheme] = useState(true);

  return (
    <MotionCanvas
      dpr={[1, 2]}
      style={{
        backgroundColor: theme ? "#F1F4F8" : "#0E0B07",
      }}
    >
      <Preload all />
      <LayoutCamera position={[0, 0, 10]} />
      <Lights />
      <Torus
        position={[-2.5, -1, 0]}
        rotation={[-Math.PI / 2, Math.PI / 6, 0]}
        scale={0.3}
        args={[2, 1, 48, 64]}
        material={RoughMaterialRoyalBlue}
      />

      <RoundedBox
        position={[2, 2.5, 0]}
        rotation={[-Math.PI / 2, Math.PI / 6, 0]}
        scale={1}
        material={RoughMaterialRoyalBlue}
      />

      <Tetrahedron
        position={[1.5, -4.8, 0]}
        rotation={[Math.PI / 4, 0, Math.PI / 2]}
        scale={1}
        material={RoughMaterialRoyalBlue}
      />
    </MotionCanvas>
  );
};
export default PostScene;
