const bcrypt = require('bcryptjs');

const cryptingAndRegister = (req, res) => {
    const newManager = req.newManager

    bcrypt.genSalt(10, (err, salt) => {
        if(err) console.error('There was an error', err);
        else {
            bcrypt.hash(newManager.password, salt, (err, hash) => {
                if(err) console.error('There was an error', err);
                else {
                    newManager.password = hash;
                    newManager.save()
                    .then(user => {
                        res.json(user)
                    }); 
                }
            });
        }
    })
}

module.exports = cryptingAndRegister