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
        loginBoilerplate.createUser(userInfo).then(function(user) {
            console.log(user);
            done();
        }).catch(function(err){
            done(err);
        });
    });
});
