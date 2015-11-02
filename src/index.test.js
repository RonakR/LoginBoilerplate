var expect = require('chai').expect;
var loginBoilerplate = require('./index');
var userInfo = {
    "username": "Test",
    "email": "test@gmail.com",
    "password": "password"
};

describe('login-boilerplate', function() {
    it('should work!', function() {
        expect(true).to.be.true;
    });
    it('should create user', function(done) {
        loginBoilerplate.createUser(userInfo).then(function(user) {
            expect(user).to.have.property("_id");
            expect(user).to.have.property("username");
            expect(user.username).to.equal("Test");
            expect(user).to.have.property("email");
            expect(user.email).to.equal("test@gmail.com");
            expect(user).to.have.property("password");
            expect(user.password).to.equal("password");
            done();
        }).catch(function(err){
            done(err);
        });
    });
});
