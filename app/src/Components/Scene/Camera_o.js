import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import { a, useSpring } from "@react-spring/three";

const Camera = () => {
  const { camera, size } = useThree();

  const scroll = useScroll();

  // delta 3
  // offset .17
  const moveTo = useRef(1);

  useLayoutEffect(() => {
    camera.aspect = size.width / size.height;
    camera.position.z = 5;
    camera.fov = 50;
    camera.updateProjectionMatrix();
    console.log(camera.aspect);
  }, [size, camera]);

  useFrame(() => {
    if (scroll.offset < 0.15) {
      moveTo.current = 1;
      camera.position.x = 0;
    } else if (scroll.offset < 0.3) {
      moveTo.current = 2;
      camera.position.x = 5;
    }
  });

  return null;
};
export default Camera;
