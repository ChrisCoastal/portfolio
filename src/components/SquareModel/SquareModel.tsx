import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import {
  Float,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
  useScroll,
  useTexture,
} from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';

const SquareModel = (props: any) => {
  const group = useRef();
  // @ts-expect-error useGLTF is mistyped from drei
  const { nodes, materials, animations } = useGLTF('/assets/basic.glb');
  const { actions, names } = useAnimations(animations, group);

  const scroll = useScroll();

  const displacement = useLoader(
    THREE.TextureLoader,
    '/assets/displacement-soft-clouds.jpeg'
  );

  useEffect(() => {
    console.log(actions);
    const interval = setInterval(() => {
      console.log(scroll.offset);
    }, 1000);

    const action = actions[names[0]];
    const actionBall = actions['CubeAction'];
    console.log(action, actionBall);
    if (!action || !actionBall) return;
    void (action.play().paused = true);
    void (actionBall.play().paused = true);

    return () => clearInterval(interval);
  }, [actions, names, scroll.offset]);

  useFrame((state, delta) => {
    const action = actions[names[0]];
    const actionBall = actions['CubeAction'];
    if (!action || !actionBall) return;
    actionBall.time = THREE.MathUtils.damp(
      actionBall.time,
      actionBall.getClip().duration * scroll.offset * 2.2,
      1000,
      delta
    );
    action.time = THREE.MathUtils.damp(
      action.time,
      action.getClip().duration * scroll.offset,
      1000,
      delta
    );
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[7.36, 4.96, 6.93]}
          rotation={[1.24, 0.33, -0.76]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={false}
            far={100}
            near={0.1}
            fov={22.9}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          rotation={[0.78, 0, 0]}
        />
      </group>
    </group>
  );
};

export default SquareModel;
useGLTF.preload('/assets/basic.glb');
