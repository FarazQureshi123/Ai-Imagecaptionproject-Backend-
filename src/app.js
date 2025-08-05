const express = require('express');
const indexRoutes = require('../routes/auth.routes');
const cookieparser = require("cookie-parser");
const postRoutes = require("../routes/post.routes")


const app = express();
app.use(express.json());
app.use('/api/auth',indexRoutes)
app.use(cookieparser());
app.use('/api/posts',postRoutes);



module.exports = app;