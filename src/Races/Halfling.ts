import Race from './Race';

export default class Halfling extends Race {
  static _createdRacesInstances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterite: number) {
    super(name, dexterite);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
} 