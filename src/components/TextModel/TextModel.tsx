import {
  Float,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
  useScroll,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TextModel = () => {
  const sceneGroup = useRef(null);
  // @ts-expect-error useGLTF is not typed correctly
  const { nodes, materials, animations } = useGLTF('/assets/never-scene2.glb');

  const scroll = useScroll();

  const { actions, names } = useAnimations(animations, sceneGroup);
  useEffect(() => {
    const action = actions[names[0]];
    if (!action) return;
    void (action.play().paused = true);
  }, [actions, names]);

  useFrame((state, delta) => {
    const action = actions[names[0]];
    if (!action) return;
    action.time = THREE.MathUtils.damp(
      action.time,
      action.getClip().duration * scroll.offset,
      100,
      delta
    );
  });

  return (
    <group dispose={null} ref={sceneGroup}>
      <group name="Scene">
        <group name="Camera" position={[0, 19.63, 0]}>
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={1000}
            near={0.01}
            fov={20}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="Empty" />
        <group
          name="Area"
          position={[-7.99, -40.45, 6.45]}
          rotation={[3.05, 0.76, 0.23]}
        />
        <group name="Empty001" position={[-0.93, 0, 1.26]} />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.001']}
          position={[3.03, -2.34, -2.71]}
        />
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane010"
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane009"
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane014"
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane008"
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane013"
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane020"
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane012"
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane019"
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane015"
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane017"
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane022"
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane007"
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane018"
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane023"
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane011"
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane016"
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="Plane021"
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <Float>
          <mesh
            name="Mball002"
            castShadow
            receiveShadow
            geometry={nodes.Mball002.geometry}
            material={materials.ink}
            position={[3.55, 1.06, -2.34]}
            scale={0.88}
            onPointerOver={(e) => console.log('over')}
          />
          <mesh
            name="Mball003"
            castShadow
            receiveShadow
            geometry={nodes.Mball003.geometry}
            material={materials.ink}
            position={[-4.19, 3.17, 1.52]}
            scale={0.38}
            onPointerOver={(e) => console.log('over')}
          />
        </Float>
        <group name="Plane" scale={12.49}>
          <mesh
            name="Plane025"
            castShadow
            receiveShadow
            geometry={nodes.Plane025.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plane025_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane025_1.geometry}
            material={materials['white.001']}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/assets/never-scene2.glb');

export default TextModel;
