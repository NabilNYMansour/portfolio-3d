import { Text3D } from "@react-three/drei";
import * as THREE from "three";

const IntroText3D = ({heyText, nabil, setSelectedApp, setNabilHover}:{
  heyText: React.RefObject<THREE.Group<THREE.Object3DEventMap>>
  nabil: React.RefObject<THREE.Group<THREE.Object3DEventMap>>
  setSelectedApp: (app: string) => void
  setNabilHover: (hover: boolean) => void
}) => {
  return <group position={[-0.2, 1.75, 2]} rotation={[0, 0, Math.PI / 25]}>
    <group ref={heyText}>
      <Text3D
        curveSegments={32}
        height={0.1}
        bevelEnabled
        bevelSize={0.001}
        castShadow size={0.15} font="/Inter_Bold.json">
        Hey, I'm
        <meshNormalMaterial />
      </Text3D>
    </group>
    <group ref={nabil} position={[0.9, 0, 0]}
      onClick={() => setSelectedApp("")}
      onPointerEnter={() => setNabilHover(true)}
      onPointerLeave={() => setNabilHover(false)}>
      <Text3D size={0.25}
        curveSegments={32}
        height={0.1}
        castShadow font="/Inter_Bold.json">
        Nabil
        <meshStandardMaterial color="#EEEEF1" />
      </Text3D>
      <mesh position={[0.5, 0.125, 0]}>
        <planeGeometry args={[1, 0.25]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>
    </group>
  </group>
}

export default IntroText3D;