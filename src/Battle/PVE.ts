import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import { verifyFightersLife } from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private environment: SimpleFighter[];
  
  constructor(
    player: Fighter = new Character('Jon'),
    environment: SimpleFighter[] = [new Monster(), new Character('Theon')],
  ) {
    super(player);
    this.player = player;
    this.environment = environment;
  }

  fight(): number {
    while (verifyFightersLife(this.environment, this.player)) {
      this.environment.forEach((monster) => {
        if (this.player.lifePoints !== -1 && monster.lifePoints !== -1) {
          monster.receiveDamage(this.player.strength);
          monster.attack(this.player);
        }
      });
    }

    return super.fight();
  }
}
