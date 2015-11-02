//Require dependencies
import {co as run} from "co";
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost/login-boilerplate');

//Establish connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Create user schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});
//Create user model
var User = mongoose.model('User', userSchema);

module.exports = {
    //Create user based on userInfo
    createUser: function(userInfo){
        var create = new Promise(function(resolve, reject){
            run(function *(){
                try {
                    if (typeof userInfo === "undefined" && userInfo === null) throw "Object undefined or empty";
                    if (typeof userInfo.username === "undefined" && userInfo.username === null) throw "username undefined or empty";
                    if (typeof userInfo.email === "undefined" && userInfo.email === null) throw "email undefined or empty";
                    if (typeof userInfo.password === "undefined" && userInfo.password === null) throw "password undefined or empty";

                    var user = (yield new User(userInfo).save(function(err, user){
                        if (err) throw err;
                    }));
                    resolve (user);
                }
                catch (e) {
                    reject (e);
                }

            });
        });
        create.then(function(user){
            return user;
        }).catch(function(err){
            console.log("err: ", err);
        });
    }
};

