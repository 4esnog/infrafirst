const assert = require('assert');
const myFunc = require('../src/myFunc.js');

describe('myFunc()', function() {
    it('should return 'Test' when called', function() {
        assert.equal('Test', myFunc());
    });
});
