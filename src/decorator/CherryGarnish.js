var Parent = require('./CocktailDecorator');
var CherryGarnish = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

CherryGarnish.prototype = Object.create(Parent.prototype);

CherryGarnish.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nGarnish with a maraschino cherry";
}