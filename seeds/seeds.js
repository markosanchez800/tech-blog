const sequelize = require('../config/connection');
const User = require('../models/User')
const Blog = require('../models/Blog')
const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDb = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Blog.bulkCreate(blogData,{
        returning:true,
    });

    process.exit(0);
};

seedDb();