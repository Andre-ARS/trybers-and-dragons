import Race from './Race';

export default class Elf extends Race {
  static _createdRacesInstances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterite: number) {
    super(name, dexterite);
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
} 