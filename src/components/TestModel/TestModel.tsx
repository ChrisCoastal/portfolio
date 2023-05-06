import React, { useRef } from 'react';
import * as THREE from 'three';

import {
  Float,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
  useScroll,
  useTexture,
} from '@react-three/drei';
import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';

type Props = {};

export function TestModel() {
  const groupRef = useRef(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);

  // @ts-expect-error
  const { nodes, materials, animations } = useGLTF('/assets/problem.glb');
  const { actions } = useAnimations(animations, groupRef);

  const scroll = useScroll();

  // useFrame((state, delta) => {
  //   if (!sphereRef.current) return;
  //   const position = scroll.curve(0, 1 / 3);
  //   // console.log(position);
  //   // sphereRef.current.position.y = position;
  //   sphereRef.current.position.z = position * 3;
  // });

  return (
    <group ref={groupRef} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[7.36, 4.96, 6.93]}
          rotation={[1.24, 0.33, -0.76]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={false}
            far={1000}
            near={0.001}
            fov={39.6}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="Empty" position={[-1.37, 0.82, -1.6]} />
        <mesh
          ref={sphereRef}
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/problem.glb');

export default TestModel;
