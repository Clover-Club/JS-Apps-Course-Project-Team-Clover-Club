var assert = require("assert");
var validator = require('../usersInputValidator.js')
describe('UsersInputValidator', function () {
    describe('validateUsername()', function () {
        it('should throw error when the username is undefined', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword(undefined, '1234');
            });
        });

        it('should throw error when the username is null', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword(null, '1234');
            });
        });

        it('should throw error when the username is empty string', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('', '1234');
            });
        });

        it('should throw error when the username contains invalid characters(1)', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('asdf@fg', '1234');
            });
        });

        it('should throw error when the username contains invalid characters(2)', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('!asg', '1234');
            });
        });

        it('should throw error when the username contains invalid characters(3)', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('asdfg^', '1234');
            });
        });

        it('should throw error when the username is too short', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('Ab', '1234');
            });
        });
    });

    describe('validatePassword()', function () {
        it('should throw error when the password is undefined', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('asdf', undefined);
            });
        });

        it('should throw error when the password is null', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('asdf', null);
            });
        });

        it('should throw error when the password is empty string', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('asdf', '');
            });
        });

        it('should throw error when the username contains invalid characters(1)', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('!asg', '(1234');
            });
        });

        it('should throw error when the username contains invalid characters(2)', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('!asg', '1234+');
            });
        });

        it('should throw error when the username contains invalid characters(3)', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('!asg', '123ь4');
            });
        });

        it('should throw error when the password is too short', function () {
            assert.throws(function () {
                validator.validateUsernameAndPassword('asdf', '12');
            });
        });
    });
});