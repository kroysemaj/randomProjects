var arrays = [[1, 2, 3], [4, 5], [6]];
var flattened = [];

arrays.reduce(function(prev, cur){
  console.log(cur);
  cur.forEach(function(curElement){
    flattened.push(curElement);
  });
}, 0);

console.log(flattened);
// → [1, 2, 3, 4, 5, 6]