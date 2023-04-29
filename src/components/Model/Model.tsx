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

const Model = () => {
  const sceneGroup = useRef(null);
  // @ts-expect-error useGLTF is mistyped from drei
  const { nodes, materials, animations } = useGLTF('/assets/rendertestodd.glb');

  const scroll = useScroll();

  const displacement = useLoader(
    THREE.TextureLoader,
    '/assets/displacement-soft-clouds.jpeg'
  );

  const { actions, names } = useAnimations(animations, sceneGroup);
  useEffect(() => {
    console.log(actions);
    const action = actions[names[0]];
    const actionBall = actions['SphereAction'];
    console.log(action, actionBall);
    if (!action || !actionBall) return;
    void (action.play().paused = true);
    void (actionBall.play().paused = true);
  }, [actions, names]);

  useFrame((state, delta) => {
    const action = actions[names[0]];
    const actionBall = actions['SphereAction'];
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

  //   return (
  //     <group dispose={null} ref={sceneGroup}>
  //       <group name="Scene">
  //         <group name="Camera" position={[0, 19.63, 0]}>
  //           <PerspectiveCamera
  //             name="Camera_Orientation"
  //             makeDefault={true}
  //             far={1000}
  //             near={0.01}
  //             fov={22.9}
  //             rotation={[-Math.PI / 2, 0, 0]}
  //           />
  //         </group>
  //         <group name="Empty" />
  //         <group
  //           name="Area"
  //           position={[-7.99, -40.45, 6.45]}
  //           rotation={[3.05, 0.76, 0.23]}
  //         />
  //         <group name="Empty001" position={[-0.93, 0, 1.26]} />
  //         <mesh
  //           name="char13n"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char13n.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="emissionSphere"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.emissionSphere.geometry}
  //           material={materials['Material.001']}
  //           position={[3.03, -2.34, -2.71]}
  //         />
  //         <Float>
  //           <mesh
  //             name="emissionSphere"
  //             castShadow
  //             receiveShadow
  //             geometry={nodes.emissionSphere.geometry}
  //             material={materials['Material.001']}
  //             position={[1, -5, -2.71]}
  //           />
  //         </Float>
  //         <mesh
  //           name="char9f"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char9f.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char16o"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char16o.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char6a"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char6a.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char4r"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char4r.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char10o"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char10o.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char8t"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char8t.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char72i"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char72i.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />

  //         <mesh
  //           name="char20"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char20.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char5w"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char5w.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char71i"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char71i.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char18r"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char18r.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char15t"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char15t.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char122i"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char122i.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char19y"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char19y.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char2v"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char2v.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char18d"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char18d.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char1e"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char1e.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char3e"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char3e.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <Float>
  //           <mesh
  //             name="meta001"
  //             castShadow
  //             receiveShadow
  //             geometry={nodes.meta001.geometry}
  //             material={materials.ink}
  //             position={[3.55, 1.06, -2.34]}
  //             scale={0.88}
  //           />
  //           <mesh
  //             name="meta002"
  //             castShadow
  //             receiveShadow
  //             geometry={nodes.meta002.geometry}
  //             material={materials.ink}
  //             position={[-4.19, 3.17, 1.52]}
  //             scale={0.38}
  //           />
  //         </Float>
  //         <mesh
  //           name="char14k"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char14k.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char0n"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char0n.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char11r"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char11r.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <mesh
  //           name="char121i"
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.char121i.geometry}
  //           material={materials.ink}
  //           position={[0, -0.07, 0]}
  //           scale={3.68}
  //         />
  //         <group name="ground" scale={12.49}>
  //           <mesh
  //             name="Plane025"
  //             castShadow
  //             receiveShadow
  //             geometry={nodes.Plane025.geometry}
  //             material={materials.Material}
  //           />
  //           <mesh
  //             name="Plane025_1"
  //             castShadow
  //             receiveShadow
  //             geometry={nodes.Plane025_1.geometry}
  //             material={materials['white.001']}
  //           />
  //         </group>
  //       </group>
  //     </group>
  //   );
  // };

  // useGLTF.preload('/assets/rendertest.glb');

  return (
    <group dispose={null} ref={sceneGroup}>
      <group name="Scene">
        <group name="Camera" position={[0, 19.63, 0]}>
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={true}
            far={1000}
            near={0.01}
            fov={22.9}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="Empty" />
        <group name="Empty001" position={[-0.93, 0, 1.26]} />
        <mesh
          name="emissionSphere"
          castShadow
          receiveShadow
          geometry={nodes.emissionSphere.geometry}
          material={materials['Material.001']}
          position={[3.03, -2.34, -2.71]}
        />
        <mesh
          name="char13n"
          castShadow
          receiveShadow
          geometry={nodes.char13n.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char9f"
          castShadow
          receiveShadow
          geometry={nodes.char9f.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="meta001"
          castShadow
          receiveShadow
          geometry={nodes.meta001.geometry}
          material={materials.ink}
          position={[3.55, 1.06, -2.34]}
          scale={0.88}
        />
        <mesh
          name="char6a"
          castShadow
          receiveShadow
          geometry={nodes.char6a.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char5w"
          castShadow
          receiveShadow
          geometry={nodes.char5w.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char10o"
          castShadow
          receiveShadow
          geometry={nodes.char10o.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="meta002"
          castShadow
          receiveShadow
          geometry={nodes.meta002.geometry}
          material={materials.ink}
          position={[-4.19, 3.17, 1.52]}
          scale={0.38}
        />
        <mesh
          name="char72i"
          castShadow
          receiveShadow
          geometry={nodes.char72i.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char15t"
          castShadow
          receiveShadow
          geometry={nodes.char15t.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char20"
          castShadow
          receiveShadow
          geometry={nodes.char20.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char18r"
          castShadow
          receiveShadow
          geometry={nodes.char18r.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char71i"
          castShadow
          receiveShadow
          geometry={nodes.char71i.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char18d"
          castShadow
          receiveShadow
          geometry={nodes.char18d.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char122i"
          castShadow
          receiveShadow
          geometry={nodes.char122i.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char19y"
          castShadow
          receiveShadow
          geometry={nodes.char19y.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char3e"
          castShadow
          receiveShadow
          geometry={nodes.char3e.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char2v"
          castShadow
          receiveShadow
          geometry={nodes.char2v.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char1e"
          castShadow
          receiveShadow
          geometry={nodes.char1e.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char16o"
          castShadow
          receiveShadow
          geometry={nodes.char16o.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char4r"
          castShadow
          receiveShadow
          geometry={nodes.char4r.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char8t"
          castShadow
          receiveShadow
          geometry={nodes.char8t.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char14k"
          castShadow
          receiveShadow
          geometry={nodes.char14k.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char0n"
          castShadow
          receiveShadow
          geometry={nodes.char0n.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char11r"
          castShadow
          receiveShadow
          geometry={nodes.char11r.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <mesh
          name="char121i"
          castShadow
          receiveShadow
          geometry={nodes.char121i.geometry}
          material={materials.ink}
          position={[0, -0.07, 0]}
          scale={3.68}
        />
        <group name="ground" scale={12.49}>
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
            // geometry={nodes.Plane025_1.geometry}
            material={materials['white.001']}
          />
        </group>
        <group
          name="Sphere"
          position={[0.07, -4.41, -0.11]}
          rotation={[-0.71, -0.8, -1.57]}
          scale={0.18}
        >
          {/* <mesh>
            <sphereBufferGeometry args={[1, 64, 64]} />
            <meshPhongMaterial displacementMap={displacement} />
          </mesh> */}
          <mesh
            name="Sphere_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_1.geometry}
            material={materials['Material.001']}
          ></mesh>
          <mesh
            name="Sphere_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_2.geometry}
            material={materials.Material}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/assets/rendertestodd.glb');

export default Model;
