const assert = require('chai').assert;
const getRandomHex = require('../src/helpers.js').getRandomHex;
const generateColor = require('../src/helpers.js').generateColor;

describe('getRandomHex()', function() {
    for (let i = 0; i < 10; i++) {
        it('should return random int between 0 and 255', function() {
            let num = getRandomHex();
            assert.isAtLeast(num, 0);
            assert.isAtMost(num, 255);
        });
    }
});

describe('generateColor()', function() {
    for (let i = 0; i < 10; i++) {
        it('should array (length = 3) of integer', function() {
            let color = generateColor();

            assert.typeOf(color, 'array', 'Got array');
            assert.equal(color.length, 3, 'of length 3')
            color.forEach(function (el, i) {
                assert.typeOf(el, 'number', i + ': number');
            });
        });
    }
});
