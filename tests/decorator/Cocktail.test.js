var constants = require('./_constants.json');
var assert = require('chai').assert;
var Cocktail = require('../../src/decorator/Cocktail');

describe('Cocktail', function() {

    it('always comes out wonderfully', function() {

        var martini = new Cocktail(constants.MARTINI);

        assert.equal(martini.name, constants.MARTINI);
        assert.equal(martini.mix(), constants.SIGNATURE);
    });
});