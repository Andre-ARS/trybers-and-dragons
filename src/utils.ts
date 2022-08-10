import Fighter, { SimpleFighter } from './Fighter';

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

export function verifyFightersLife(monsters: SimpleFighter[], player: Fighter) {
  return monsters
    .some(({ lifePoints }) => lifePoints !== -1) && player.lifePoints !== -1;
}

export default getRandomInt;
