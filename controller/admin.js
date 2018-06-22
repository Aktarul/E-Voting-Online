var Admin = require('../model/admin');

var createAdmin = (req, res, next) => {
    console.log('this is Admin user');

    var name = req.body.name,
        email = req.body.email,
        userName = req.body.username,
        password = req.body.password;

    var myUser = new Admin({
        name: name,
        email: email,
        username: userName,
        password: password
    });

    Admin.addUser(myUser, (err, user) => {
        if (err) {
            res.status(404).json({
                'message': err
            })
        } else {
            res.status(201).json({
                success: true,
                'message': 'Admin created'
            })
        }

    });
}

module.exports = {
    createAdmin
}
