export const generateNormalRandom = (mean = 0, stdDev = 1) => {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * stdDev + mean;
};

export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);
