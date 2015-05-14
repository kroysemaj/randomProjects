//Dynamic templating
var copyTemplate = (function () {

  var count = 0;

  return function () {
    var template = document.querySelector('#mud');
    var clone = document.importNode(template.content, true);

    clone.querySelector('#noun').textContent = 'Slim Shady';
    clone.querySelector('#age').textContent = ++count;

    document.body.appendChild(clone);
  }
})();


