//Custom Elements
var customElementProto = Object.create(HTMLElement.prototype);

customElementProto.createdCallback = function() {
   this.innerHTML = "<h2>A Custom Element</h2><textarea></textarea></br><input type='submit'/> "
};

var CustomElement = document.registerElement('custom-element', {
  prototype: customElementProto
});

var ButtonProto = Object.create(HTMLButtonElement.prototype);

ButtonProto.createdCallback = function() {
  this.innerHTML = 'custom button';
  this.value = 'Default value';
  this.style.color = 'orange';
};

var  FancyButton = document.registerElement('fancy-button', {
  prototype: ButtonProto,
  extends: 'button'
});