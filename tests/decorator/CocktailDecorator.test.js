var constants = require('./_constants.json');
var is_a = require('../../src/utils/is_a');
var assert = require('chai').assert;
var Cocktail = require('../../src/decorator/Cocktail');
var CocktailDecorator = require('../../src/decorator/CocktailDecorator');

describe('CocktailDecorator', function() {

    var cocktail = new Cocktail(constants.MANHATTAN);
    var cocktailDecorator = new CocktailDecorator(cocktail);

    it('is not a cocktail', function() {
        assert.notInstanceOf(cocktailDecorator, Cocktail);
    });

    it('behaves like a cocktail', function() {
        for (var method in Cocktail.prototype) {
            assert.isFunction(cocktailDecorator[method]);
        }
    });

    describe('::add', function() {

        var cocktail = new Cocktail(constants.OLD_FASHIONED);
        var DecoratorImpl = function(cocktail) {
            CocktailDecorator.call(this, cocktail);
        };

        // Generic. Inherits CocktailDecorator for testing purposes
        DecoratorImpl.prototype = Object.create(CocktailDecorator.prototype);

        it('requires a Decorator and a cocktail', function() {
            assert.throws(CocktailDecorator.add.bind(CocktailDecorator.add, DecoratorImpl, 2), TypeError);
            assert.throws(CocktailDecorator.add.bind(CocktailDecorator.add, 1, cocktail), TypeError);
            assert.doesNotThrow(CocktailDecorator.add.bind(CocktailDecorator.add, DecoratorImpl, cocktail));
        });

        it('returns a decorated cocktail', function() {
            var decorated = CocktailDecorator.add(DecoratorImpl, cocktail);
            assert.ok(is_a(decorated, Cocktail));
            assert.equal(decorated.mix(), constants.SIGNATURE);
        });
    });

    describe('examples', function() {

        var Bitters = require('../../src/decorator/Bitters');
        var Bourbon = require('../../src/decorator/Bourbon');
        var CherryGarnish = require('../../src/decorator/CherryGarnish');
        var DryVermouth = require('../../src/decorator/DryVermouth');
        var Gin = require('../../src/decorator/Gin');
        var Ice = require('../../src/decorator/Ice');
        var OliveGarnish = require('../../src/decorator/OliveGarnish');
        var OrangeTwist = require('../../src/decorator/OrangeTwist');
        var Rye = require('../../src/decorator/Rye');
        var Shake = require('../../src/decorator/Shake');
        var Stir = require('../../src/decorator/Stir');
        var Strain = require('../../src/decorator/Strain');
        var Sugar = require('../../src/decorator/Sugar');
        var SweetVermouth = require('../../src/decorator/SweetVermouth');

        beforeEach(function() {
            console.log('\r\n');
        });

        it('Mixes an old fashioned (raw)', function() {

            var cocktail = new Cocktail(constants.OLD_FASHIONED);

            cocktail = new Sugar(cocktail);
            cocktail = new Bitters(cocktail);
            cocktail = new Ice(cocktail);
            cocktail = new Rye(cocktail);
            cocktail = new Stir(cocktail);
            cocktail = new CherryGarnish(cocktail);

            console.log(cocktail.getName());
            console.log('--')
            console.log(cocktail.mix());
            assert.equal(cocktail.mix(), 'Start with an empty glass\r\nAdd half a teaspoon of sugar\r\nAdd a splash of bitters\r\nAdd one cube of ice\r\nPour 2oz of rye\r\nStir with a clean spoon\r\nGarnish with a maraschino cherry');
        });

        it('Mixes an old fashioned (builder)', function() {

            var cocktail = new Cocktail(constants.OLD_FASHIONED);

            cocktail = CocktailDecorator.add(Sugar, cocktail);
            cocktail = CocktailDecorator.add(Bitters, cocktail);
            cocktail = CocktailDecorator.add(Ice, cocktail);
            cocktail = CocktailDecorator.add(Rye, cocktail);
            cocktail = CocktailDecorator.add(Stir, cocktail);
            cocktail = CocktailDecorator.add(CherryGarnish, cocktail);

            console.log(cocktail.getName());
            console.log('--')
            console.log(cocktail.mix());
            assert.equal(cocktail.mix(), 'Start with an empty glass\r\nAdd half a teaspoon of sugar\r\nAdd a splash of bitters\r\nAdd one cube of ice\r\nPour 2oz of rye\r\nStir with a clean spoon\r\nGarnish with a maraschino cherry');
        });

        it('Mixes a martini (builder)', function() {

            var cocktail = new Cocktail(constants.MARTINI);

            cocktail = CocktailDecorator.add(Ice, cocktail);
            cocktail = CocktailDecorator.add(Gin, cocktail);
            cocktail = CocktailDecorator.add(DryVermouth, cocktail);
            cocktail = CocktailDecorator.add(Shake, cocktail);
            cocktail = CocktailDecorator.add(Strain, cocktail);
            cocktail = CocktailDecorator.add(OliveGarnish, cocktail);

            console.log(cocktail.getName());
            console.log('--')
            console.log(cocktail.mix());
            assert.equal(cocktail.mix(), 'Start with an empty glass\r\nAdd one cube of ice\r\nPour 2oz of gin\r\nAdd a splash of dry vermouth\r\nShake it all up\r\nStrain into a clean glass\r\nGarnish with a green olive');
        });

        it('Mixes a manhattan (builder)', function() {

            var cocktail = new Cocktail(constants.MANHATTAN);

            cocktail = CocktailDecorator.add(Ice, cocktail);
            cocktail = CocktailDecorator.add(Bourbon, cocktail);
            cocktail = CocktailDecorator.add(SweetVermouth, cocktail);
            cocktail = CocktailDecorator.add(Bitters, cocktail);
            cocktail = CocktailDecorator.add(Shake, cocktail);
            cocktail = CocktailDecorator.add(Strain, cocktail);
            cocktail = CocktailDecorator.add(CherryGarnish, cocktail);
            cocktail = CocktailDecorator.add(OrangeTwist, cocktail);

            console.log(cocktail.getName());
            console.log('--')
            console.log(cocktail.mix());
            assert.equal(cocktail.mix(), 'Start with an empty glass\r\nAdd one cube of ice\r\nPour 2oz of bourbon\r\nAdd a splash of sweet vermouth\r\nAdd a splash of bitters\r\nShake it all up\r\nStrain into a clean glass\r\nGarnish with a maraschino cherry\r\nTop with a twist of orange');
        });
    })
});