const router = require('express').Router();

//const apiRoutes = require('./api');
const homeRoutes = ('./homeRoutes');

router.use('/',homeRoutes);
//router.use('/api',apiRoutes);

module.exports = router;