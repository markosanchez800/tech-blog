const router = require('express').Router();
const { reset } = require('nodemon');
const Blog = require('../../models/Blog');
//const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

router.get('/dashboard', withAuth, async(req,res)=>{
   try{
       const blogData = await Blog.findAll({
           where:{
               authorId: req.session.user_id,
           },
       });
       const blogs = blogData.map((post)=>post.get({plain:true}));
       res.render('dashboard',{
           blog: blogs,
           logged_in:req.session.logged_in
       });
   } catch(err){
       res.status(500).json(err);
   }
});


router.post('/newp', withAuth, async (req,res)=>{
    const authorId = {...req.body,authorId: req.session.user_id}
    try {
        const blogData = await Blog.create(authorId);
        console.log('Post Created!');
        res.status(200).json(blogData);
    } catch (err){
        res.status(400).json(err);
    }
});

router.get('/delete', withAuth, async(req,res)=>{
    try {
        const deletePost = await Blog.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).redirect('/api/post/dashboard').json(deletePost);
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/onepost',withAuth, async(req,res)=>{
    try {
        const blogData = await Blog.findByPk(
            {
                where: id = req.params.id
            }
        )
        const blogs = blogData.map((post)=>post.get({plain:true}));
        res.status(200).render(blogs);
    } catch (err){
        res.status(400).json(err);
    }
});



module.exports = router;