import { Scroll, Text } from "@react-three/drei";
import { motion } from "framer-motion/three";
import { useState } from "react";
import RotatingCube from "../Cubes/RotatingCube";
import { RoughMaterialRoyalBlue } from "../Materials";
import DistortingSphere from "../Spheres/DistortingSphere";
import RotatingTetrahedron from "../Tetrahedron/RotatingTetrahedron";

const One = ({ lightTheme, setLightTheme, setCursor }) => {
  const tapVariants = {
    default: { x: 2.2, y: 1 },
    moving: { x: 1, y: 2 },
  };

  const [tap, setTap] = useState(false);

  return (
    <Scroll>
      <group>
        <motion.mesh
          position={[-3, 2, -3]}
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", bounce: 0.9, duration: 3 }}
        >
          <DistortingSphere
            roughness={0}
            metalness={lightTheme ? 0.95 : 0.05}
          />
        </motion.mesh>
        <motion.mesh
          animate={tap ? "moving" : "default"}
          position={[2.2, 1, -5]}
          variants={tapVariants}
          onTap={() => {
            setTap(!tap);
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", bounce: 0.3, duration: 2 }}
          onPointerOver={() => setCursor(true)}
          onPointerOut={() => setCursor(false)}
        >
          <DistortingSphere
            roughness={0}
            metalness={lightTheme ? 0.95 : 0.05}
          />
        </motion.mesh>
        <motion.mesh
          position={[-0.7, -2, -2]}
          onTap={() => setLightTheme(!lightTheme)}
          whileTap={{ scale: 0 }}
          whileHover={{ rotateX: Math.PI }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}
          onPointerOver={() => setCursor(true)}
          onPointerOut={() => setCursor(false)}
        >
          <DistortingSphere
            roughness={0}
            metalness={lightTheme ? 0.95 : 0.05}
          />
        </motion.mesh>

        <RotatingCube
          position={[-2, -1.5, 1]}
          rotation={[3, 0, 2]}
          scale={0.75}
          material={RoughMaterialRoyalBlue}
          rotateOnX
          rotateOnZ
        />

        <RotatingCube
          position={[3, -1, -2]}
          rotation={[2, 0, 3]}
          scale={0.75}
          material={RoughMaterialRoyalBlue}
          rotateOnY
          rotateOnZ
        />

        <RotatingCube
          position={[0, 3, -5]}
          rotation={[0, 2, 1]}
          scale={0.75}
          material={RoughMaterialRoyalBlue}
          rotateOnY
          rotateOnZ
        />

        <motion.mesh
          position={[0, 0, 0]}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.3, duration: 2 }}
        >
          <Text
            scale={3}
            color={lightTheme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            I'm Romain
          </Text>
        </motion.mesh>
        <motion.mesh
          position={[0, -0.3, -0.5]}
          initial={{ scale: 0, y: -0.8 }}
          animate={{ scale: 1, y: -0.3 }}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.7 }}
        >
          <Text
            scale={1.5}
            color={lightTheme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            Student in software development
          </Text>
        </motion.mesh>

        <group>
          <RotatingTetrahedron
            position={[8, -2, -2]}
            rotateOnX
            material={RoughMaterialRoyalBlue}
            rotationFact={0.02}
          />
          <RotatingTetrahedron
            position={[10, -4, 0]}
            rotateOnY
            material={RoughMaterialRoyalBlue}
            rotationFact={0.02}
          />
          <RotatingTetrahedron
            position={[9, -6, -2]}
            rotateOnZ
            material={RoughMaterialRoyalBlue}
            rotationFact={0.02}
          />
        </group>
      </group>
    </Scroll>
  );
};
export default One;
