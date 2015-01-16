var Parent = require('./CocktailDecorator');
var Rye = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

Rye.prototype = Object.create(Parent.prototype);

Rye.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nPour 2oz of rye";
}