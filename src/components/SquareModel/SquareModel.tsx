import React, { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';

import {
  Float,
  PerspectiveCamera,
  useAnimations,
  useDepthBuffer,
  useGLTF,
  useScroll,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const SquareModel: FC = () => {
  const group = useRef(null);
  // @ts-expect-error useGLTF is mistyped from drei
  const { nodes, materials, animations, scene } = useGLTF(
    '/render/nice-stuff.glb'
  );
  const { actions, names } = useAnimations(animations, group);
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const scroll = useScroll();

  useEffect(() => {
    const actionSquare = actions['CubeAction.005'];
    if (!actionSquare) return;
    void (actionSquare.play().paused = true);
    void (actionSquare.play().paused = true);
  }, [actions, names, scroll.offset]);

  useFrame((state, delta) => {
    const actionCamera = actions['CameraAction'];
    const actionSquare = actions['CubeAction.005'];
    if (actionSquare) {
      actionSquare.time = THREE.MathUtils.damp(
        actionSquare.time,
        actionSquare.getClip().duration * scroll.offset,
        1000,
        delta
      );
    }
    if (actionCamera) {
      actionCamera.time = THREE.MathUtils.damp(
        actionCamera.time,
        actionCamera.getClip().duration * scroll.offset,
        1000,
        delta
      );
    }
  });

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[6.62, 5.66, 6.98]}
          rotation={[1.24, 0.33, -0.76]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={true}
            far={100}
            near={1}
            fov={20.41}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>

        <Float rotationIntensity={2} speed={0.5}>
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.002']}
            rotation={[0.78, 0, 0]}
          />
        </Float>
        <Float rotationIntensity={6} speed={0.8}>
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.002']}
            rotation={[0, -6, 0]}
          />
        </Float>
      </group>
    </group>
  );
};

export default SquareModel;
useGLTF.preload('/render/nice-stuff.glb');
