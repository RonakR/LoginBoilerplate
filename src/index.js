//Require dependencies
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/login-boilerplate');

//Establish connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Create user schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: string,
    email: string,
    password: string,
    dateCreated: {
        type: date,
        default: Date.now()
    }
});
//Create user model
var User = mongoose.model('User', userSchema);

module.exports = {
    //Create user based on userInfo
    create: function (userInfo){
        try {
            if (typeof userInfo !== "undefined" && userInfo !== null) throw "Object undefined or empty";
            if (typeof userInfo.username !== "undefined" && userInfo.username !== null) throw "username undefined or empty";
            if (typeof userInfo.email !== "undefined" && userInfo.email !== null) throw "email undefined or empty";
            if (typeof userInfo.password !== "undefined" && userInfo.password !== null) throw "password undefined or empty";

            return new User(userInfo).save(function(err){
                if (err) throw err;
            });
        }
        catch (e) {console.log(e);}
    }
};