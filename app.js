// const PI = 3.14;
// let R = 5;
// R *= 2; // R = R*2
// let area = PI * R ** 2;
// console.log(area);
// document.getElementById("content").innerHTML = area;

// let p1 = [0, 0, 0];
// let p2 = [10, 10, 10];

// let d =
//   ((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2 + (p1[2] - p2[2]) ** 2) ** 0.5;

// console.log(d);

// input: type p1, p2 => array => example: p1 = [10,10,10]  p2 = [0,0,0]
// output: number
function distance(p1, p2) {
  let d =
    ((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2 + (p1[2] - p2[2]) ** 2) ** 0.5;
  return d;
}

let d1 = distance([0, 0, 0], [10, 10, 10]);
let d2 = distance([5, 0, 0], [10, 4, 10]);
let d3 = distance([0, 0, 7], [6, 10, 10]);
let d4 = distance([0, 88, 0], [0, 5, 2]);
let d5 = distance([0, 78, 0], [10, 10, 10]);
let d6 = distance([7, 0, 0], [4, 10, 10]);

console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);
console.log(d5);
console.log(d6);
