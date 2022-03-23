import {
  RoundedBox,
  Scroll,
  Tetrahedron,
  Text,
  Torus,
} from "@react-three/drei";
import GlassPanel from "../Images/GlassPanel";
import { motion } from "framer-motion-3d";
import { RoughMaterialRoyalBlue } from "../Materials";
import posts from "../../../Assets/Posts.json";
import { useRef, memo } from "react";

const PostsPresenter = ({ setCursor, theme, isPhone }) => {
  const Posts = JSON.parse(JSON.stringify(posts));
  const counter = useRef(0);

  return (
    <Scroll>
      <motion.mesh
        position={[0, 3.5, 0]}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", bounce: 0.3, duration: 1 }}
        onPointerOver={() => setCursor(true)}
        onPointerOut={() => setCursor(false)}
        onClick={() => window.appHistory.push("/")}
      >
        <Text
          scale={1.5}
          color={theme ? "black" : "white"}
          font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
        >
          Go back
        </Text>
      </motion.mesh>
      <Text
        position={[0, 3, 0]}
        scale={3}
        color={theme ? "black" : "white"}
        font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
      >
        Explore my posts!
      </Text>
      <group position={[0, 1, 0]}>
        {Posts &&
          Posts.map((p, k) => {
            if (k % 2 === 0 && k !== 0) counter.current += 1;
            return (
              <GlassPanel
                key={`post_${k}`}
                position={
                  isPhone
                    ? [0, k * -2.5, 0]
                    : [k % 2 === 0 ? -2 : 2, counter.current * -2.5, 0]
                }
                texture={`${process.env.PUBLIC_URL + p.assets}/header${
                  theme ? "" : "_dark"
                }.png`}
                imageScale={0.7}
                setCursor={setCursor}
                onClick={() => window.appHistory.push(`/posts${p.url}`)}
              />
            );
          })}
      </group>
      <group>
        <RoundedBox
          position={[4.5, 3, -1]}
          rotation={[-Math.PI / 2, Math.PI / 6, 0]}
          scale={0.6}
          material={RoughMaterialRoyalBlue}
        />

        <Tetrahedron
          position={[-4.5, -1.75, -1]}
          rotation={[-Math.PI / 4, 0, Math.PI / 2]}
          scale={0.5}
          material={RoughMaterialRoyalBlue}
        />

        <Torus
          position={[2, -5.5, -1]}
          rotation={[Math.PI / 2, Math.PI / 6, 0]}
          scale={0.2}
          args={[2, 1, 48, 64]}
          material={RoughMaterialRoyalBlue}
        />
      </group>
    </Scroll>
  );
};
export default memo(PostsPresenter);
