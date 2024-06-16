// custom.d.ts
import * as THREE from "three";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      bentPlaneGeometry: ReactThreeFiber.BufferGeometryProps & {
        args: ConstructorParameters<typeof THREE.BufferGeometry>;
      };
      meshSineMaterial: ReactThreeFiber.MaterialProps & {
        uniforms?: { [uniform: string]: THREE.IUniform };
      };
    }
  }
}
