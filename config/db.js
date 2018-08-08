const mongoose = require('mongoose');
// mongoose.connect('mongodb://ecommerce-teste:teste123@ds117888.mlab.com:17888/ecommerce-teste', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/ecommerce-teste', { useNewUrlParser: true });

module.exports = mongoose;