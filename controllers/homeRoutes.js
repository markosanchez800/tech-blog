const router = require('express').Router();
//add necessary models here once created
//const withAuth = require('../utils/auth');

router.get('/',async,(req,res)=>{
    try{
        const blogData = await Blog.findAll({

        });
        res.render('homepage',{
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;