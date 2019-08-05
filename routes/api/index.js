var express = require('express');
var router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    const newFilename = `${Date.now()}-${file.originalname}`;
    cb(null, newFilename);
  },
});
// create the multer instance that will be used to upload/save the file
const upload = multer({storage});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({success: true, message: 'Welcome to Node APIs'});
});

router.post('/users', upload.single('image'), (req, res) => {
  res.json({username: req.body.username, file: req.file})
})

module.exports = router;
