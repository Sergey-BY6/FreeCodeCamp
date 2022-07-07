let count = 0;

function cc(card) {
  // Only change code below this line
  let a = [2, 3, 4, 5, 6]
  let b = [7, 8, 9]
  let c = [10, 'J', 'Q', 'K', 'A']

for (let i of a) {
if (card == i) count ++
}
for (let ii of b) {
if (card == ii) count + 0
}
for (let iii of c) {
if (card == iii) count --
}

return count <= 0 ? count + " Hold": count + " Bet"

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
