"use strict";

var loginBoilerplate = require("../dist/index");

var userInfo = {
    "username": "Test",
    "email": "test@gmail.com",
    "password": "password"
};

//var user = loginBoilerplate.createUser(userInfo)
//    .then(user => console.log("user in: ", user))
//    .catch(err => console.log(err));

var user = loginBoilerplate.createUser(userInfo).then(function (user) {
    console.log("user in: ", user);
    return user;
}).catch(function (err) {
    console.log(err);
});

console.log("user out: ", user);
