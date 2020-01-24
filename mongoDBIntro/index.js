const mongoose = require('mongoose');

const UserSchema = require ('./models/user');

mongoose.connect('mongodb+srv://prestorhyme:acwellan@cluster0-hxpjz.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

const user = new UserSchema({
    name: 'your name',
    email: 'yourName@mail.com', 
    password:'mySuperSecretPassword'
});

user.save();