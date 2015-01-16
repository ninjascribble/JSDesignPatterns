var Parent = require('./CocktailDecorator');
var OliveGarnish = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

OliveGarnish.prototype = Object.create(Parent.prototype);

OliveGarnish.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nGarnish with a green olive";
}