var Parent = require('./CocktailDecorator');
var Strain = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

Strain.prototype = Object.create(Parent.prototype);

Strain.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nStrain into a clean glass";
}