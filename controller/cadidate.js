var Cadidate = require('../model/candidate'),
    multer = require('multer');

let store = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '.' + file.originalname);
    }
});

let upload = multer({storage:store}).single('file');

var createCadidate = (req, res, next) => {
    var firstName = req.body.firstName,
        middleName = req.body.middleName,
        lastName = req.body.lastName,
        position = req.body.position,
        dept = req.body.dept,
        email = req.body.email,
        username = req.body.username,
        password = req.body.password,
        party = req.body.party,
        total_vote = req.body.total_vote;

    var newCandidate = new Cadidate({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        position: position,
        dept: dept,
        email: email,
        username: username,
        password: password,
        party: party,
        total_vote: total_vote
});




    Cadidate.addUser(newCandidate, (err, candidate) =>{
        if(err){
            res.status(404).json({
                success: false,
                message: err
            })
        }
        else{
            res.status(201).json({
                success: true,
                data: candidate
            })
        }
    })
};

var getSearchCandidate = (req, res, next) => {

    let topSearch = req.params.searchKey;

    if(topSearch){
        Cadidate.find({position: new RegExp(topSearch,'i')}, (err, product) => {
            if(err) {
                return res.status(400).json({
                    success: false,
                    message: 'can not find this category products'
                });
            }else {
                return res.status(201).json({
                    success: true,
                    data: product
                });
            }
        })
    } else {
        return res.status(200).json({
            success: false
        });
    }
};


var updateCandidate = (req, res, next) =>{

    var firstName = req.body.firstName,
        middleName = req.body.middleName,
        lastName = req.body.lastName,
        position = req.body.position,
        dept = req.body.dept,
        email = req.body.email,
        username = req.body.username,
        party = req.body.party,
        password = req.body.password;




    Cadidate.findById(req.params.id, (err, candidate) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {


            candidate.firstName = firstName || candidate.firstName;
            candidate.middleName = middleName || candidate.middleName;
            candidate.lastName = lastName || candidate.lastName;
            candidate.dept = dept || candidate.dept;
            candidate.position = position || candidate.position;
            candidate.email = email || candidate.email;
            candidate.party = party || candidate.party;
            candidate.username = username || candidate.username;


            candidate.save((err, candidate) => {
                if(err){
                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {



                    return res.status(200).json({
                        success: true,
                        data: candidate
                    });
                }
            });
        }
    });

};

var updateCandidate2 = (req, res, next) =>{

    upload( req, res, (err) =>{
        if(err){

        }
        else{


            var firstName = req.body.firstName,
                middleName = req.body.middleName,
                lastName = req.body.lastName,
                position = req.body.position,
                dept = req.body.dept,
                email = req.body.email,
                party = req.body.party,
                username = req.body.username,
                password = req.body.password;
                picture = req.file.filename ;




            Cadidate.findById(req.params.id, (err, candidate) => {
                if(err){
                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {


                    candidate.firstName = firstName || candidate.firstName;
                    candidate.middleName = middleName || candidate.middleName;
                    candidate.lastName = middleName || candidate.lastName;
                    candidate.dept = middleName || candidate.dept;
                    candidate.position = position || candidate.position;
                    candidate.email = position || candidate.email;
                    candidate.party = party || candidate.party;
                    candidate.username = position || candidate.username;
                    candidate.picture = picture || candidate.picture;


                    candidate.save((err, candidate) => {
                        if(err){
                            return res.status(404).json({
                                message: err,
                                success: false
                            });
                        }
                        else {



                            return res.status(200).json({
                                success: true,
                                data: candidate
                            });
                        }
                    });
                }
            });

        }
    })


}

var getAllCandidate = (req, res, next) =>{
    Cadidate.find( (err, candidate)=>{
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })

        }
        else{
            return res.status(200).json({
                success: true,
                data: candidate
            })
        }
    })
}


var getSingleCandidate = (req, res, next) =>{
    Cadidate.findById( req.params.id, (err, candidate)=>{
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })

        }
        else{
            return res.status(200).json({
                success: true,
                data: candidate
            })
        }
    })
}

var deleteCandidate = (req, res, next) =>{
    let userId = req.params.id;
    if (!userId) {
        return res.status(202).json({ success: false, message: 'Invalid or incomplete property.'});
    } else {
        Cadidate.findByIdAndRemove(userId, (err, user) => {
            if (err) {
                return res.status(401).json({ success: false, message: 'Fatal Server Error: ' + err});
            } else {
                return res.status(201).json({ success: true, message: 'Successfully delete the user.', data: user });
            }
        });
    }
}


var updateVote = (req, res, next) =>{

    console.log('in vote update');

    Cadidate.findById(req.params.id, (err, candidate) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            candidate.total_vote = candidate.total_vote + 1;

            candidate.save((err, candidate) => {
                if(err){
                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {
                    return res.status(200).json({
                        success: true,
                        data: candidate
                    });
                }
            });
        }
    });

};


module.exports = {
    createCadidate,
    updateCandidate,
    getAllCandidate,
    deleteCandidate,
    updateCandidate2,
    getSingleCandidate,
    getSearchCandidate,
    updateVote
};