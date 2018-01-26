export const generateID = () => {
  return window.crypto.getRandomValues(new Uint32Array(10))[3];
}
