var Parent = require('./CocktailDecorator');
var OrangeTwist = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

OrangeTwist.prototype = Object.create(Parent.prototype);

OrangeTwist.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nTop with a twist of orange";
}