const router = require('express').Router();
const User = require('../../models/User');

router.post('/', async (req,res)=>{
    try {
        const userData = await User.create(req.body);

        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            console.log('Account Added');
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req,res)=>{
    try{
        const userData = await User.findOne({where:{email:req.body.email}});
       
        if (!userData){
            res
            .status(400)
            .json({message: 'Incorrect email or Password, try again'});
            return;
        }
       
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword){
            res
            .status(400)
            .json({ message: 'Incorrect email or Password, try again'});
        }

        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Logged In!'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;