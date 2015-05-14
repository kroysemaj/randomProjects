var addressEntry = {
  name: 'Bill',
  number: '734-222-0000'
};
var addressEntry2 = {
  name: 'Billy',
  number: '7343-222-0000'
};
var addressEntry3 = {
  name: 'Bill00',
  number: '734-222-0000'
};
var addressEntry4 = {
  name: 'Bill2323',
  number: '4334734-222-0000'
};

var addressBook = [];

addressBook.push(addressEntry);
addressBook.push(addressEntry2);
addressBook.push(addressEntry3);


console.log('original: ', addressBook);
console.log('popped', addressBook.pop());
console.log('after', addressBook);



// var addressBook = [addressEntry, addreseEntry2, addreseEntry3, addreseEntry4];

// for(var i = 0; i < addressBook.length; i++){
//   console.log(addressBook[i].name);
//   console.log(addressBook[i].number);
// }