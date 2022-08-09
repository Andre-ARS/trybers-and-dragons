function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

export function updateMaxLife(maxLife: number, raceMaxLife: number): number {
  const newMax = maxLife + getRandomInt(1, 10);

  const validMax = newMax <= raceMaxLife ? newMax : raceMaxLife;
  
  return validMax;
}

export default getRandomInt;
