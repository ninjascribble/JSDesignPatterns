var Parent = require('./CocktailDecorator');
var SweetVermouth = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

SweetVermouth.prototype = Object.create(Parent.prototype);

SweetVermouth.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nAdd a splash of sweet vermouth";
}