import * as THREE from 'three'
import { parsePathData } from '../utils/SVGUtils'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

function SvgPath({ d, color = '#000', isCCW = true, ...props }: any) {
  const path = parsePathData(d)
  const shapes = path.toShapes(isCCW)
  return (
    <group {...props}>
      {shapes.map((shape, i) => (
        <mesh key={i}>
          <shapeGeometry args={[shape]} />
          <meshBasicMaterial color={color} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

interface Icon3DProps extends React.ComponentProps<'group'> {
  path: string;
  color?: string;
  isCCW?: boolean;
  selected?: boolean;
}

export default function Icon3D({ path, color = '#000', isCCW = true, selected, ...props }: Icon3DProps) {
  const icon = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [originalScale, setOriginalScale] = useState(0.35);

  useEffect(() => {
    if (selected) {
      setOriginalScale(0.45);
    } else {
      setOriginalScale(0.25);
    }
  }, [selected]);

  useFrame((state) => {
    if (icon.current) {
      const t = state.clock.getElapsedTime()
      icon.current.rotation.y = THREE.MathUtils.lerp(icon.current.rotation.x, t * 4, 0.5);

      if (hovered) {
        icon.current.scale.x = THREE.MathUtils.lerp(icon.current.scale.x, originalScale * 1.3, 0.1)
        icon.current.scale.y = THREE.MathUtils.lerp(icon.current.scale.y, originalScale * 1.3, 0.1)
        icon.current.scale.z = THREE.MathUtils.lerp(icon.current.scale.z, originalScale * 1.3, 0.1)
      }
      else {
        icon.current.scale.x = THREE.MathUtils.lerp(icon.current.scale.x, originalScale, 0.1)
        icon.current.scale.y = THREE.MathUtils.lerp(icon.current.scale.y, originalScale, 0.1)
        icon.current.scale.z = THREE.MathUtils.lerp(icon.current.scale.z, originalScale, 0.1)
      }
    }
  });

  return (
    <group {...props} ref={icon}>
      <SvgPath d={path} color={color} isCCW={isCCW} scale={[1 / 12, -1 / 12, 1 / 12]} position={[-1, 1, 0]} />
      <mesh castShadow
        scale={[1, 1, 0.25]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <sphereGeometry args={[1]} />
        <meshStandardMaterial color={color} transparent opacity={0} />
      </mesh>
    </group>
  )
}