import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private player2: Fighter;
  
  constructor(
    player1: Fighter = new Character('Jon'),
    player2: Fighter = new Character('Arya'),
  ) {
    super(player1);
    this.player = player1;
    this.player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }

    return super.fight();
  }
}
