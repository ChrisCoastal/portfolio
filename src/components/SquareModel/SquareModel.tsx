import React, { FC, useEffect, useRef } from 'react';
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

type SquareModelProps = {
  position?: [number, number, number];
};

const SquareModel: FC<SquareModelProps> = ({ position = [0, 0, 0.79] }) => {
  const group = useRef(null);
  // @ts-expect-error useGLTF is mistyped from drei
  const { nodes, materials, animations, scene } = useGLTF(
    '/assets/nice-stuff.glb'
  );
  const { actions, names } = useAnimations(animations, group);

  const scroll = useScroll();

  // const displacement = useLoader(
  //   THREE.TextureLoader,
  //   '/assets/displacement-soft-clouds.jpeg'
  // );

  useEffect(() => {
    // console.log(actions);
    // const interval = setInterval(() => {
    //   console.log(scroll.offset);
    // }, 1000);

    const action = actions[names[0]];
    const actionSquare = actions['CubeAction.005'];
    // console.log(action, actionSquare);
    if (!action || !actionSquare) return;
    void (action.play().paused = true);
    void (actionSquare.play().paused = true);

    // return () => clearInterval(interval);
  }, [actions, names, scroll.offset]);

  useFrame((state, delta) => {
    const action = actions[names[0]];
    const actionCamera = actions['CameraAction'];
    const actionSquare = actions['CubeAction.005'];
    if (!action || !actionSquare) return;
    actionSquare.time = THREE.MathUtils.damp(
      actionSquare.time,
      actionSquare.getClip().duration * scroll.offset,
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
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[5.4, 3.79, 5.24]}
          rotation={[1.24, 0.33, -0.76]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={true}
            far={100}
            near={0.1}
            fov={20.41}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="Empty" position={[-1.37, 0.82, -1.6]} />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.002']}
          position={position}
          rotation={[0.96, -0.67, -2.31]}
        />
      </group>
    </group>

    // <group ref={group} {...props} dispose={null}>
    //   <group name="Scene">
    //     <group
    //       name="Camera"
    //       position={[7.36, 4.96, 6.93]}
    //       rotation={[1.24, 0.33, -0.76]}
    //     >
    //       <PerspectiveCamera
    //         name="Camera_Orientation"
    //         // must be false for drei Float; true for using camera animation from gltf
    //         makeDefault={false}
    //         far={100}
    //         near={0.1}
    //         fov={22.9}
    //         rotation={[-Math.PI / 2, 0, 0]}
    //       />
    //     </group>
    //     <mesh
    //       name="Cube"
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube.geometry}
    //       material={materials.Material}
    //       rotation={[0.78, 0, 0]}
    //     />
    //   </group>
    // </group>
  );
};

export default SquareModel;
useGLTF.preload('/assets/nice-stuff.glb');
