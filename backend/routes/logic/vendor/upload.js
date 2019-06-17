const multer = require('multer')
const path = require('path')
const multiparty = require('multiparty');

const upload = (req, res) => {
    
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, '../front/public/img/userAvatars')
        },
        filename: (req, file, cb) => {   
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })

    const upload = multer({ 
        storage,
        fileFilter: function(req, file, cb) {
            checkFileType(file, cb)
        }
    }).single('file')

    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({
                venPhotoURL: err
            }) 
        }
        else { 
            return res.status(200).json(req.file.filename)
        }
    })

    // Check file type
    const checkFileType = (file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
        const mimetype = fileTypes.test(file.mimetype)
        
        if (mimetype && extname) {
            return cb(null, true)
        } 
        else {
            cb('Images only. File does not uploaded')
        }
    }
}

module.exports = upload