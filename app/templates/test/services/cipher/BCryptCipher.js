var assert = require('assert'),
    BCryptCipher = require('../../../api/services/cipher/BCryptCipher');

describe("cipher:BCryptCipher", function () {
    it("Should be a function", function () {
        assert.equal(typeof BCryptCipher, 'function');
    });

    it("Should properly create new instance", function () {
        var cipher = new BCryptCipher('test');
        assert(cipher instanceof BCryptCipher);
    });

    it("Should properly hash data", function () {
        var cipher = new BCryptCipher('test'),
            hash = cipher.hashSync();

        assert(new BCryptCipher(hash).compareSync('test'));
    });
});
