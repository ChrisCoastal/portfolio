import React, { ReactElement, RefObject, useRef } from 'react';
import { Vector3 } from 'three';

import { SpotLight } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

type Props = {};

const CursorSpotLight = ({ vec = new Vector3(), ...props }) => {
  const light = useRef<any>(null);
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    if (!light.current) return;
    light.current.target.position.lerp(
      vec.set(
        state.mouse.x * viewport.width,
        state.mouse.y * viewport.height,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={4}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={0.2}
      {...props}
    />
  );
};

export default CursorSpotLight;
