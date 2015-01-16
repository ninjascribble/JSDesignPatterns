/**
 * @param obj {Object} The object under test
 * @param tmpl {Class} The class to test against
 */
module.exports = function(obj, tmpl) {
    return Object.keys(tmpl.prototype).every(function(key) {
        return typeof obj[key] == 'function';
    })
}