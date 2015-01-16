var Parent = require('./CocktailDecorator');
var Stir = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

Stir.prototype = Object.create(Parent.prototype);

Stir.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nStir with a clean spoon";
}