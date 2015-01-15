var CocktailDecorator = function(cocktail) {
    this.cocktail = cocktail;
}

module.exports = CocktailDecorator;

CocktailDecorator.prototype = Object.create(Object.prototype);

CocktailDecorator.prototype.mix = function() {
    return this.cocktail.mix();
}