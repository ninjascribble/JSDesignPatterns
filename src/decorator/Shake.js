var Parent = require('./CocktailDecorator');
var Shake = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

Shake.prototype = Object.create(Parent.prototype);

Shake.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nShake it all up";
}