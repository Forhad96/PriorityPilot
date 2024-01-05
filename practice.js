
const numbers = [1, 2, 3, 4, 5, 1, 2, 3];
// const uniqueNumbers =[...new Set(numbers)]
// console.log(uniqueNumbers);
let i = 0;
while (i < numbers.length) {
  let j = i + 1;
  console.log(j);
  while (j < numbers.length) {
    if (numbers[i] === numbers[j]) {
      numbers.splice(j, 1);
    } else {
      j++;
    }
  }
  i++;
}
console.log(`The array after removing duplicates: ${numbers}`);
