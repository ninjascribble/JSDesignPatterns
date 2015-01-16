var Parent = require('./CocktailDecorator');
var Bourbon = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

Bourbon.prototype = Object.create(Parent.prototype);

Bourbon.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nPour 2oz of bourbon";
}