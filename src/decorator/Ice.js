var Parent = require('./CocktailDecorator');
var Ice = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

Ice.prototype = Object.create(Parent.prototype);

Ice.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nAdd one cube of ice";
}