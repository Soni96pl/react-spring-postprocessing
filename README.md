# React Spring Postprocessing

A tiny library that exports `{ a, createAnimatedFiber }` to allow you to use @react-spring/three with Three.js RenderPass, ShaderPass as well as custom shader materials.

#### Building
Use `yarn` or `npm run build` to build the package.

#### Examples
```
import { extend, useThree } from "@react-three/fiber";
import { EffectComposer, FilmShader, RenderPass, ShaderPass } from "three-stdlib";
import { a as af } from "react-spring-postprocessing";

extend({ EffectComposer, RenderPass, ShaderPass });

const AnimatedShader = ({ scanlinesSpring }) => {
  const { gl, scene, camera } = useThree();

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <af.shaderPass
        attachArray="passes"
        args={[FilmShader]}
        material-uniforms-sCount-value={scanlinesSpring}
        material-uniforms-grayscale-value={false}
        material-uniforms-sIntensity-value={1.5}
        material-uniforms-nIntensity-value={0.2}
      />
    </effectComposer>
  );
};
```