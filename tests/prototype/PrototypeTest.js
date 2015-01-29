var assert = require('chai').assert;
var MyClass = require('../../src/prototype/MyClass.js');

describe('MyClass', function() {

    it('is instantiable', function() {
        
        var inst1 = new MyClass();
        var inst2 = new MyClass();

        inst1.language = 'es';
        inst2.language = 'fr';

        assert.equal(inst1.zero, 'cero');
        assert.equal(inst2.three, 'trois');
        assert.equal(inst1.name, 'Bob');
        assert.equal(inst2.name, 'Bob');

        inst2.name = 'Mary';
        assert.equal(inst1.name, 'Bob');
        assert.equal(inst2.name, 'Mary');

        inst3 = new MyClass('Frank');
        assert.equal(inst1.name, 'Bob');
        assert.equal(inst2.name, 'Mary');
        assert.equal(inst3.name, 'Frank');
    });
});