const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const path = require('path')

const npc_users = require('./routes/npc_user'); 
const manager_users = require('./routes/manager_user');
const operator_users = require('./routes/operator_users');

const countries = require('./routes/country');
const foodGroups = require('./routes/foodGroup');
const organizations = require('./routes/organization');
const inspectQuestions = require('./routes/inspectQuestion');

const vendors = require('./routes/vendor');
const scratchCards = require('./routes/scratchCard');
const callLogs = require('./routes/callLog');

const inspections = require('./routes/inspection')
const reports = require('./routes/report')

const app = express();

mongoose.set('useFindAndModify', false);
console.log('====================')
console.log(config.DB);
console.log('====================')

mongoose.connect(config.DB, { useNewUrlParser: true, useCreateIndex: true }).then(     
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

// app.use('/static', express.static(__dirname + '/public'))

app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/managerUsers', manager_users);
app.use('/api/users', npc_users);
app.use('/api/operatorUsers', operator_users);

app.use('/api/countries', countries);
app.use('/api/foodGroups', foodGroups);
app.use('/api/organizations', organizations);
app.use('/api/questions', inspectQuestions);

app.use('/api/vendors', vendors);
app.use('/api/cards', scratchCards);
app.use('/api/calls', callLogs);

app.use('/api/inspection', inspections);
app.use('/api/report', reports)

if (process.env.NODE_ENV === 'production') {
    // Priority serve any static files.
    app.use(express.static(path.resolve(__dirname, '../front/build')));

    // All remaining requests return the React app, so it can handle routing.
    app.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname, '../front/build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});