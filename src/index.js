module.exports = function reverse (n) {
let text = String(Math.abs(n));
let revText = [...text].reverse().join("");
return Number(revText);
   }