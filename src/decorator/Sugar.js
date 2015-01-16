var Parent = require('./CocktailDecorator');
var Sugar = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

Sugar.prototype = Object.create(Parent.prototype);

Sugar.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nAdd half a teaspoon of sugar";
}