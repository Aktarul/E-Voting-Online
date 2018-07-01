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
};

var publishResult = (req, res, next) =>{

    console.log('in result publish');

    let tempPublished = true;

    Admin.findById(req.params.id, (err, admin) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            admin.isPublished = tempPublished || admin.isPublished;

            console.log(admin.isPublished);

            admin.save((err, admin) => {
                console.log('In admin save' + admin);
                if(err){
                    console.log('in error: ' + err);
                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {
                    console.log(admin);
                    return res.status(200).json({
                        success: true,
                        data: admin
                    });
                }
            });
        }
    });

};

var getSingleAdmin = (req, res, next) =>{
    Admin.findById(req.params.id, (err, admin) => {
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })

        }
        else{
            return res.status(200).json({
                success: true,
                data: admin
            })
        }
    })
};

module.exports = {
    createAdmin,
    publishResult,
    getSingleAdmin
};
