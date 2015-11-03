# LoginBoilerplate
Login Boilerplate written in NodeJS with a MongoDB data store

### Import
< ES6
```js 
var loginBoilerplate = require('login-boilerplate');
```
ES6 >
```js
import loginBoilerplate from "login-boilerplate";
```

### Create User
Call createUser() with user information, capture the promise with either a .then() and/or .catch()
```js
var user = loginBoilerplate.create(userInfo).then(function (){
                return user;
            }).catch(function(err) {
                console.log(err);
            });
```


