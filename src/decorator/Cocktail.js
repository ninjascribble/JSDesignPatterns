var Cocktail = function(name) {
    this.name = name;
}

module.exports = Cocktail;

Cocktail.prototype = Object.create(Object.prototype);

Cocktail.prototype.mix = function() {
    return '...and enjoy!';
}