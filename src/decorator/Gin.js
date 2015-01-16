var Parent = require('./CocktailDecorator');
var Gin = module.exports = function(cocktail) {
    Parent.call(this, cocktail);
}

Gin.prototype = Object.create(Parent.prototype);

Gin.prototype.mix = function() {
    return this.cocktail.mix() + "\r\nPour 2oz of gin";
}