var name = "";
var done = false;

function ask() {
  return prompt("Please enter your  name");
}

function helloName(){
  while(!done) {
    userinput = ask();
    if(isTooShort(userinput)){
      alert("Your name is short. Too short.\n Do it again!");
    } else {
      alert("Hello " + userinput);
      done = true;
    }
  }
}

function isTooShort(inputName){
  return inputName.length < 2;
}

helloName(name)