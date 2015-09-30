var expect = require('chai').expect;
var loginBoilerplate = require('./index');
var userInfo = {
    "username": "Ron",
    "email": "ronakraithatha@gmail.com",
    "password": "password"
};

describe('login-boilerplate', function() {
    it('should work!', function() {
        expect(true).to.be.true;
    });
    it('should create user', function(done) {
        var user = loginBoilerplate.create(userInfo, done());
        console.log(user);
    });
});
