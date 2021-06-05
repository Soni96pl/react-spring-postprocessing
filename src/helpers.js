import { applyProps } from "@react-three/fiber";
import { createHost } from "@react-spring/animated";

export const createAnimatedFiber = (input) => {
  const primitives = Object.keys(input).map(
    (key) => key[0].toLowerCase() + key.slice(1)
  );

  const host = createHost(primitives, {
    applyAnimatedValues: applyProps,
  });

  return host.animated;
};
