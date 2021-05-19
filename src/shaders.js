export const vertexShader = `
precision mediump float;

varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;



export const fragmentShader = `
precision mediump float;

varying vec2 vUv;

void main() {
  gl_FragColor = vec4(0., 0., 0., 1.);
}
`;
