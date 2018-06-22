let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    path = require('path');

let config = require('./config');

let port = process.env.PORT || config.serverPort;

mongoose.Promise = global.Promise;
mongoose.connect(config.database, (err) => {
    if (err) {
        console.log('Error in database connection. ' + err);
    } else {
        console.log('Database connected');
}
});

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


let admin = require('./routes/admin'),
    voter = require('./routes/voter'),
    candidate = require('./routes/candidate');


app.use('/api/test', (req, res, next) => {
    return res.status(201).json({ success: true, message: "Welcome to E-voting system." });
});


app.use('/api/admin', admin);
app.use('/api/voter', voter);
app.use('/api/candidate',candidate);


app.use('*', (req, res, next) => {
    res.status(200).json({ success: false, message: 'Does not match any resource of the routing.' });
});

app.listen(port, (err)=>{
    console.log("Server running on port: "+port);
})