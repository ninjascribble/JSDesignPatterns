var Cocktail = module.exports = function(name) {
    this.name = name;
}

Cocktail.prototype = Object.create(Object.prototype);

Cocktail.prototype.getName = function() {
    return this.name;
}

Cocktail.prototype.mix = function() {
    return 'Start with an empty glass';
}