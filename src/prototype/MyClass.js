var langs = ['en', 'fr', 'es']
var numbers = {
    'es': ['cero', 'uno', 'dos', 'tres'],
    'fr': ['zero', 'un', 'deux', 'trois'],
    'en': ['zero', 'one', 'two', 'three']
}

var MyClass = function(name) {
    if (name) this.name = name;
}

MyClass.prototype = Object.create(Object.prototype, {
    name: {
        writable: true,
        value: 'Bob'
    },
    zero: {
        get: function() {
            return numbers[this.language][0];
        }
    },
    one: {
        get: function() {
            return numbers[this.language][1];
        }
    },
    two: {
        get: function() {
            return numbers[this.language][2];
        }
    },
    three: {
        get: function() {
            return numbers[this.language][3];
        }
    },
});

module.exports = MyClass;