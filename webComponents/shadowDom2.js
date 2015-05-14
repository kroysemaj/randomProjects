var CommentProto = Object.create(HTMLElement.prototype);

CommentProto.createdCallback = function(){
  var template = document.querySelector('template');
  var shadow = this.createShadowRoot();

  shadow.appendChild(document.importNode(template.content, true));

};

document.registerElement('comment-form', {
  prototype: CommentProto
});