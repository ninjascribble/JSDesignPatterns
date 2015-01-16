var Parent = require('./CocktailDecorator');
var DryVermouth = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

DryVermouth.prototype = Object.create(Parent.prototype);

DryVermouth.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nAdd a splash of dry vermouth";
}