const router = require('express').Router();
const blogRoutes = require('./blogRoutes');



router.use('/blogPost', blogRoutes);

module.exports.router;