module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const path = require('path');
    const multer = require('multer');
    //multer - 파일 업로드 객체
    const storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, 'upload');
        },
        filename: function(req, file, callback) {
            callback(null, file.originalname);
        }
    });
    const upload = multer({
        storage: storage,
        linits: {
            files: 10,
            fileSize: 1024 * 1024 * 1024
        }
    });
    
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/upload', 'fileUpload.html'));
    });
    
    router.route('/photo').post(upload.array('photo', 1), (req, res) => {
        try {
            const files = req.files;
            console.log(req.files[0]);
            res.end();
        } catch {
            
        }
    });
    
    return router;
};