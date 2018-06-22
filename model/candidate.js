var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');

var candidateSchema = new Schema({
    firstName: { type: String},
    middleName: { type: String},
    lastName: { type: String},
    position: { type: String},
    dept: {type: String},
    picture: { type: String},
    email: { type: String},
    username: { type: String },
    password: { type: String}
})

module.exports = mongoose.model('Candidate', candidateSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id,callback);
}

module.exports.getUserByUserName = function (username,callback) {
    let query = { username: username }
    User.findOne(query,callback);
}

module.exports.addUser = function(newUser, callback) {

    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(newUser.password, salt, (err,hash) =>{
            if(err){
                throw err;
            }
            else{
                newUser.password =  hash;

                newUser.save((err, user) => {
                    if (err) {
                        return callback(err, null);
                    } else {
                        return callback(null, user);
                    }
                });
            }
        })
    })

}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
        if(err){
            throw err;
        }
        else{
            callback(null, isMatch);
        }
    })
}

