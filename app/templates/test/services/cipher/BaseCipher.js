var assert = require('assert'),
    BaseCipher = require('../../../api/services/cipher/BaseCipher');

describe("cipher:BaseCipher", function () {
    it("Should be a function", function () {
        assert.equal(typeof BaseCipher, 'function');
    });

    it("Should properly create BaseCipher", function () {
        var cipher = new BaseCipher('test');
        assert(cipher instanceof BaseCipher);
    });

    it("Should properly get/set content", function () {
        var cipher = new BaseCipher('test');

        assert.equal(cipher.getContent(), 'test');

        cipher.setContent({id: '123'});
        assert.deepEqual(cipher.getContent(), {id: '123'});
    });
});
