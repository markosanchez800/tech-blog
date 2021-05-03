const router = require('express').Router();
const User = require('../models/User')
const Blog = require('../models/Blog')
//const withAuth = require('../utils/auth');

router.get('/', async (req,res)=>{
    try{
        const blogData = await Blog.findAll({
        });
        const blogs = blogData.map((blog) => blog.get({plain: true}));
        console.log(blogs);
        res.render('homepage',{
            blog: blogs
            //logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req,res)=>{
   res.render('login');
})

module.exports = router;