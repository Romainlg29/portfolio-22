import { useTexture } from "@react-three/drei";

const ImageMesh = ({
  texture,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  initialScale = false,
}) => {
  const t = useTexture(texture);


  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={scale}
      receiveShadow
    >
      <planeBufferGeometry
        attach="geometry"
        args={
          initialScale
            ? initialScale
            : [t.image.naturalWidth / 1000, t.image.naturalHeight / 1000]
        }
      />
      <meshBasicMaterial attach="material" map={t} />
    </mesh>
  );
};
export default ImageMesh;
