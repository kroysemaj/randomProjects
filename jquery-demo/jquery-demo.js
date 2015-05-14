var myArray = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'more'
];

myArray.forEach(function(element, index){
  if(!(++index % 4 === 0)){
    console.log(element + " potato");
  } else{
    console.log(element + "!");
  }
});