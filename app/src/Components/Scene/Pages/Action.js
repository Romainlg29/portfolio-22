import { RoundedBox, Scroll, Sphere, Text, Torus } from "@react-three/drei";
import { motion } from "framer-motion/three";
import RotatingCube from "../Cubes/RotatingCube";
import {
  DarkRoyalBlueMaterial,
  LightRoyalBlueMaterial,
  RoughMaterialRoyalBlue,
} from "../Materials";

const Two = ({ theme, isPhone }) => {
  return (
    <Scroll>
      <group>
        <RotatingCube
          position={[2, -8, -9]}
          rotation={[0, 2, 1]}
          scale={0.75}
          material={RoughMaterialRoyalBlue}
          rotateOnY
          rotateOnZ
        />
        <RotatingCube
          position={[-3, -11, -7]}
          rotation={[0, 2, 1]}
          scale={0.75}
          material={RoughMaterialRoyalBlue}
          rotateOnY
          rotateOnZ
        />
      </group>
      {isPhone ? (
        <group>
          <Text
            position={[10, -10, 5]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={2.2}
            color={theme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            I'm looking for
          </Text>
          <Text
            position={[10, -10.3, 5]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={2.2}
            color={theme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            an engineering school
          </Text>
          <Text
            position={[10, -10.6, 5]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.7}
            color={theme ? "royalblue" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            Starting in September 2022
          </Text>
        </group>
      ) : (
        <group>
          <Text
            position={[10, -10, 5]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={2}
            color={theme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            I'm looking for an engineering school
          </Text>
          <Text
            position={[10, -10.3, 5]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1.5}
            color={theme ? "royalblue" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            Starting in September 2022
          </Text>
        </group>
      )}

      <group position={[10, -10, 5]}>
        <motion.mesh
          position={[2, 0.8, -5]}
          animate={{
            y: [1, -0.5],
            z: [-3, -1.8],
            scale: [0, 0.5, 0.5, 0],
          }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 3,
          }}
        >
          <Sphere scale={1} material={RoughMaterialRoyalBlue} />
        </motion.mesh>

        <motion.mesh
          position={[2, -0.5, 5]}
          animate={{
            y: [-0.5, 1],
            z: [5, 3],
            scale: [0, 0.3, 0.3, 0],
          }}
          transition={{
            delay: 4,
            type: "spring",
            bounce: 0.3,
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 4,
          }}
        >
          <Sphere scale={1} material={RoughMaterialRoyalBlue} />
        </motion.mesh>
      </group>

      <group position={[10, -10, 5]}>
        <motion.mesh
          position={[0, 2, -1]}
          rotation={[0, Math.PI / 4, 0]}
          animate={{
            scale: [0, 0.4, 0.5, 0.4, 0],
            rotateX: Math.PI * 3,
          }}
          transition={{
            delay: 3,
            type: "spring",
            bounce: 0.3,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 9,
          }}
        >
          <RoundedBox
            radius={0.05}
            smoothness={4}
            receiveShadow
            material={RoughMaterialRoyalBlue}
          />
        </motion.mesh>

        <motion.mesh
          position={[0, -1.5, -2]}
          rotation={[0, Math.PI / 4, 0]}
          animate={{
            scale: [0, 0.4, 0.5, 0.4, 0],
            rotateY: Math.PI * 3,
          }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 9,
          }}
        >
          <RoundedBox
            radius={0.05}
            smoothness={4}
            receiveShadow
            material={RoughMaterialRoyalBlue}
          />
        </motion.mesh>

        <motion.mesh
          position={[0, -2.5, 1]}
          rotation={[0, Math.PI / 4, 0]}
          animate={{
            scale: [0, 0.4, 0.5, 0.4, 0],
            rotateX: Math.PI * 3,
            rotateZ: Math.PI * 3,
          }}
          transition={{
            delay: 6,
            type: "spring",
            bounce: 0.3,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 9,
          }}
        >
          <RoundedBox
            radius={0.05}
            smoothness={4}
            receiveShadow
            material={RoughMaterialRoyalBlue}
          />
        </motion.mesh>

        <motion.mesh
          position={[0, 1, 2]}
          rotation={[0, Math.PI / 4, 0]}
          animate={{
            scale: [0, 0.4, 0.5, 0.4, 0],
            rotateZ: Math.PI * 3,
          }}
          transition={{
            delay: 9,
            type: "spring",
            bounce: 0.3,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 9,
          }}
        >
          <RoundedBox
            radius={0.05}
            smoothness={4}
            receiveShadow
            material={RoughMaterialRoyalBlue}
          />
        </motion.mesh>
      </group>

      <group position={[10, -10, 5]}>
        <motion.mesh
          position={[5, 2, 2]}
          scale={0.2}
          rotation={[0, Math.PI / 4, 0]}
          whileHover={{ rotateY: Math.PI * 2, scale: [0.2, 0.15, 0.2] }}
          whileTap={{ rotateY: Math.PI * 3 }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 2,
          }}
        >
          <Torus
            args={[2, 1, 48, 64]}
            material={theme && DarkRoyalBlueMaterial}
          >
            {!theme && <LightRoyalBlueMaterial />}
          </Torus>
        </motion.mesh>
        <motion.mesh
          position={[1, -2, -1]}
          scale={0.2}
          rotation={[0, -Math.PI / 4, Math.PI / 2]}
          whileTap={{ rotateX: Math.PI * 3 }}
          whileHover={{ rotateX: Math.PI * 2, scale: [0.2, 0.15, 0.2] }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 2,
          }}
        >
          <Torus
            args={[2, 1, 48, 64]}
            material={theme && DarkRoyalBlueMaterial}
          >
            {!theme && <LightRoyalBlueMaterial />}
          </Torus>
        </motion.mesh>
      </group>
    </Scroll>
  );
};
export default Two;
