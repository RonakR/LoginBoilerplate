//Require dependencies
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _co = require('co');

var run = _interopRequireWildcard(_co);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

_mongoose2['default'].connect('mongodb://localhost/login-boilerplate');

//Establish connection
var db = _mongoose2['default'].connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Create user schema
var Schema = _mongoose2['default'].Schema;
var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    dateCreated: {
        type: Date,
        'default': Date.now()
    }
});
//Create user model
var User = _mongoose2['default'].model('User', userSchema);

module.exports = {
    //Create user based on userInfo
    create: function create(userInfo) {
        new Promise(function (resolve, reject) {
            run(regeneratorRuntime.mark(function callee$2$0() {
                var user;
                return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            context$3$0.prev = 0;

                            if (!(typeof userInfo === "undefined" && userInfo === null)) {
                                context$3$0.next = 3;
                                break;
                            }

                            throw "Object undefined or empty";

                        case 3:
                            if (!(typeof userInfo.username === "undefined" && userInfo.username === null)) {
                                context$3$0.next = 5;
                                break;
                            }

                            throw "username undefined or empty";

                        case 5:
                            if (!(typeof userInfo.email === "undefined" && userInfo.email === null)) {
                                context$3$0.next = 7;
                                break;
                            }

                            throw "email undefined or empty";

                        case 7:
                            if (!(typeof userInfo.password === "undefined" && userInfo.password === null)) {
                                context$3$0.next = 9;
                                break;
                            }

                            throw "password undefined or empty";

                        case 9:
                            context$3$0.next = 11;
                            return new User(userInfo).save(function (err, user) {
                                if (err) throw err;
                                console.log(user);
                                return user;
                            });

                        case 11:
                            user = context$3$0.sent;

                            console.log(user);
                            return context$3$0.abrupt('return', resolve(user));

                        case 16:
                            context$3$0.prev = 16;
                            context$3$0.t0 = context$3$0['catch'](0);

                            console.log(context$3$0.t0);
                            return context$3$0.abrupt('return', reject(context$3$0.t0));

                        case 20:
                        case 'end':
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[0, 16]]);
            }));
        });
    }
};
