import { MotionCanvas } from "framer-motion/three";
import {
  Scroll,
  ScrollControls,
  Preload,
  Torus,
  Sphere,
  Tetrahedron,
} from "@react-three/drei";
import Lights from "../../Lights";
import { RoughMaterialRoyalBlue } from "../../Materials";
import RoundedCube from "../../Cubes/RoundedCube";

const PostWrapper = ({ pages = 1, children }) => {
  return (
    <MotionCanvas
      colorManagement
      dpr={[1, 2]}
      camera={{ fov: 70 }}
      style={{
        backgroundColor: "#F1F4F8",
        width: "100%",
      }}
    >
      <Preload all />
      <ScrollControls pages={pages} damping={4} distance={2}>
        <Scroll html>{children}</Scroll>
        <Scroll>
          <Torus
            position={[4.5, -5, 1]}
            rotation={[Math.PI / 2, Math.PI / 6, 0]}
            scale={0.2}
            args={[2, 1, 48, 64]}
            material={RoughMaterialRoyalBlue}
          />
          <RoundedCube
            position={[-6, -15, -1]}
            rotation={[-Math.PI / 2, Math.PI / 4, 0]}
            scale={0.7}
            material={RoughMaterialRoyalBlue}
          />
          <Sphere
            position={[7, -25, -2]}
            scale={0.5}
            material={RoughMaterialRoyalBlue}
          />
          <Tetrahedron
            position={[-4, -38.5, 1]}
            rotation={[Math.PI / 4, 0, Math.PI / 2]}
            scale={0.25}
            material={RoughMaterialRoyalBlue}
          />
          <RoundedCube
            position={[6, -48, -1]}
            rotation={[Math.PI / 4, Math.PI / 2, 0]}
            scale={0.7}
            material={RoughMaterialRoyalBlue}
          />
        </Scroll>
      </ScrollControls>

      <Lights />
    </MotionCanvas>
  );
};
export default PostWrapper;
