const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/users', userRoutes);
router.use('/blogPost', blogRoutes);
router.use('/comment', commentRoutes);

module.exports.router;