var constants = require('./_constants.json');
var assert = require('chai').assert;
var Cocktail = require('../../src/decorator/Cocktail');
var CocktailDecorator = require('../../src/decorator/CocktailDecorator');

describe('CocktailDecorator', function() {

    it('is not a cocktail', function() {

        var cocktail = new Cocktail(constants.MANHATTAN);
        var cocktailDecorator = new CocktailDecorator(cocktail);

        assert.notInstanceOf(cocktailDecorator, Cocktail);
    });

    it('behaves like a cocktail', function() {

        var cocktail = new Cocktail(constants.MANHATTAN);
        var cocktailDecorator = new CocktailDecorator(cocktail);

        for (var method in Cocktail.prototype) {
            assert.isFunction(cocktailDecorator[method]);
        }
    });
});