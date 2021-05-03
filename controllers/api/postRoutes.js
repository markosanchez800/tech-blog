const router = require('express').Router();
const Blog = require('../../models/Blog');
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


module.exports = router;