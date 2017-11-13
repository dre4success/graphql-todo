const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.Promise = global.Promise;

dotenv.config({path: '.env'})
mongoose.set('debug', true);

mongoose.connect(process.env.MONGO_URI, {
  useMongoClient: true
}).catch(err => {
  console.error('Mongoose Error', err.stack)
  process.exit(1)
})

module.exports.Todo = require('./todo');