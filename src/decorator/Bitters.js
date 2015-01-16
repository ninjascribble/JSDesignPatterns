var Parent = require('./CocktailDecorator');
var Bitters = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

Bitters.prototype = Object.create(Parent.prototype);

Bitters.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nAdd a splash of bitters";
}