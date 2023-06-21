export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;

    this.statsCharacter();
  }

  statsCharacter() {
    const stats = {
      Bowman: { attack: 25, defence: 25 },
      Swordsman: { attack: 40, defence: 10 },
      Magician: { attack: 10, defence: 40 },
      Undead: { attack: 25, defence: 25 },
      Zombie: { attack: 40, defence: 10 },
      Daemon: { attack: 10, defence: 40 },
    };

    this.attack = stats[this.type].attack;
    this.defence = stats[this.type].defence;
  }
}
