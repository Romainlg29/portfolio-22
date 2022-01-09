import { useTexture } from "@react-three/drei";

const ImageMesh = ({
  texture,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  pointerIn = () => {},
  pointerOut = () => {},
}) => {
  const t = useTexture(texture);

  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={scale}
      receiveShadow
      onPointerOver={pointerIn}
      onPointerOut={pointerOut}
    >
      <planeBufferGeometry
        attach="geometry"
        args={[t.image.naturalWidth / 500, t.image.naturalHeight / 500]}
      />
      <meshBasicMaterial
        attach="material"
        map={t}
        toneMapped={false}
        transparent
      />
    </mesh>
  );
};
export default ImageMesh;
