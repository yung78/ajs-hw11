export default class TeamGen {
  constructor(...team) {
    this.team = team;
  }

  * [Symbol.iterator]() {
    for (const el of this.team) {
      yield el;
    }
  }
}
