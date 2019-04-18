const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');

const npc_users = require('./routes/npc_user'); 
const manager_users = require('./routes/manager_user');
const operator_users = require('./routes/operator_users');
const countries = require('./routes/country');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', npc_users);
app.use('/api/managerUsers', manager_users);
app.use('/api/operatorUsers', operator_users);
app.use('/api/countries', countries);

// app.get('/', function(req, res) {
//     res.send('hello page');
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});