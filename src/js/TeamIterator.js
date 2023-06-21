export default class TeamIter {
  constructor(...team) {
    this.team = team;
  }

  [Symbol.iterator]() {
    let index = -1;
    const data = this.team;
    return {
      next: () => ({
        value: data[index += 1],
        done: !(index in data),
      }),
    };
  }
}
