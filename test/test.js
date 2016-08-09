const assert = require('assert');
const myFunc = require('../src/myFunc');

describe('Server', function() {
    describe('faces()', function() {
        it('should return string when called', function() {
            assert.equal('Test', myFunc());
        });
    });
});
