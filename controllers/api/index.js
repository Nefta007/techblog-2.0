const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/blogPost', blogRoutes);

module.exports.router;