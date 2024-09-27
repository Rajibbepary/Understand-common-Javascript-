const nums = [1,2,3,4,5,7,8];
//let output = nums.filter(n => n%2);
//console.log(output);
const cube=x=> x*x*x;
//console.log(cube(2));

function min(nums) { return Math.min(nums)}
//console.log(min( [1,3,2]));

//const [a, b] = [1,2,3,4,45,5];
//console.log(a+b);

// const a = 43;
// const number = [21, 20,21];
// const person = {
//     name:'Rajib'
// }
// const message = `Hi ${person.name} has a:${number[2]} access to ${a}`;
// console.log(message);

const numbers = [3, 5, 1, 8, 7];
// function doubleIt(num){
//     return num * 3;
// }

// const doubleIt = n => n * 3;

// const reslt = numbers.map(doubleIt);
// console.log(reslt);

const output = numbers.map(n => n * 2);
const output2 = numbers.map(n => n + 5);
const output3 = numbers.map(n => n / 2);

//console.log(output,output2,output3);

const friends = ['Tom', 'John', 'micheal', 'oliver'];
const length = friends.map(frnd => frnd.length)
const fLetter = friends.map(friend => friend[0]);
//console.log(length);
//console.log(fLetter);
const players = [72, 65, 67, 75, 55, 60];
//const selected = players.filter(p => p > 70);
const selected = players.filter(p => p % 2 ===1);
console.log(selected);