const express = require('express');
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogControlller } = require('../controller/blogController');

//router objects
const router = express.Router();

//routes
//GET || all blogs
router.get('/all-blog', getAllBlogsController);

//POST || CREATE BLOG
router.post('/create-blog', createBlogController);

//put || UPDATE BLOG
router.put('/update-blog/:id', updateBlogController);

//get || single blog details
router.get('/get-blog/:id', getBlogByIdController);

//delete || delete blog
router.delete('/delete-blog/:id', deleteBlogController);

//GET || USER BLOG
router.get('/user-blog/:id', userBlogControlller);

module.exports = router;
