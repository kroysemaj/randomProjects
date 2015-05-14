var host = document.getElementById('shadow-host');
var root = host.createShadowRoot();
var shadowTemplate = document.querySelector('#shadow-dom');

root.appendChild(document.importNode(shadowTemplate.content, true));

console.log(document.querySelectorAll('h1'));