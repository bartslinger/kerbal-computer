type Vector = [number, number, number];

const crossProduct = (u: Vector, v: Vector): Vector => {
  return [
    u[1] * v[2] - u[2] * v[1],
    u[2] * v[0] - u[0] * v[2],
    u[0] * v[1] - u[1] * v[0],
  ];
};

const dotProduct = (u: Vector, v: Vector): number => {
  return u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
};

const magnitude = (v: Vector): number => {
  return Math.sqrt(dotProduct(v, v));
};

const angleBetweenVectors = (u: Vector, v: Vector): number => {
  const dp = dotProduct(u, v);
  if (dp === 0) return 0;
  const um = magnitude(u);
  const vm = magnitude(v);
  return Math.acos(dp / (um * vm)) * (180 / Math.PI);
};
