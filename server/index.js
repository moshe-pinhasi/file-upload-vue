const express = require('express')
const cors = require('cors')
const app = express()
const multer = require('multer')

function getExtension(filename) {
    return filename.split('/').pop();
}

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        const ext = getExtension(file.mimetype)
        callback(null, file.fieldname + '-' + Date.now() + '.' + ext);
    }
  });

const upload = multer({ storage : storage}).single('photos');

app.use(cors())

app.get('/', (req, res) => {
    console.log('/')
    res.send({messgae: "hello"})
});

app.post('/upload', (req, res) => {
    console.log('/upload', req.files)

    upload(req, res, (err) => {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Server listening on: ', PORT)