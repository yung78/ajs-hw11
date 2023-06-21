import TeamIter from './TeamIterator.js';
import TeamGen from './TeamGenerator.js';
import Character from './Character.js';
import canIterate from './canIterate.js';

const char1 = new Character('Bowman', 'Bowman');
const char2 = new Character('Swordsman', 'Swordsman');
const char3 = new Character('Magician', 'Magician');

const team1 = new TeamIter(char1, char2, char3);
const team2 = new TeamGen(char1, char2, char3);

console.log('ITERATOR');
for (const member of team1) {
  console.log(member);
}

console.log('GENERATOR');
for (const member of team2) {
  console.log(member);
}

console.log('CAN ITERATE');
console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate('Netology'));
