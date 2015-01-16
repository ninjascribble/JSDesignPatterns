var is_a = require('../utils/is_a');
var Cocktail = require('./Cocktail');
var CocktailDecorator = module.exports = function(cocktail) {
    this.cocktail = cocktail;
}

CocktailDecorator.prototype = Object.create(Object.prototype);

CocktailDecorator.prototype.getName = function() {
    return this.cocktail.getName();
}

CocktailDecorator.prototype.mix = function() {
    return this.cocktail.mix();
}

/**
 * @static
 * @param Decorator {constructor} A constructor for a class which implements CocktailDecorator
 * @param cocktail {Cocktail} The cocktail to decorate
 * @return The decorated cocktail
 */
CocktailDecorator.add = function(Decorator, cocktail) {

    if (Decorator.prototype instanceof CocktailDecorator === false) {
        throw new TypeError('Decorator must extend CocktailDecorator');
    }

    if (is_a(cocktail, Cocktail) === false) {
        throw new TypeError('cocktail must implement Cocktail');
    }

    return new Decorator(cocktail);
}