const express = require('express');
const router = express.Router();
const authMiddleware = require("../src/Middleware/auth.middleware");
const multer = require("multer");
const {createPostController} = require("../src/controllers/post.controller");


const upload = multer({storage:multer.memoryStorage()})


/*POST /api/posts [protected] */

router.post('/',authMiddleware,
    upload.single("image"),
    createPostController
)


module.exports = router;

