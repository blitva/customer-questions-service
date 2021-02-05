const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose connection established'));

const customerQuestionsSchema = new mongoose.Schema({
  productId: {
    type: Number,
    unique: true
  },
  questionAndAnswers: [
    {
      question: String,
      answers: [{
        answer: String,
        user: String,
        date: Date
      }],
      rating: Number
    }
  ]
});

const CustomerQuestions = mongoose.model('CustomerQuestions', customerQuestionsSchema);

const load = (productId, callback) => {
  CustomerQuestions.find({ productId: productId })
    .exec((err, data) => {
      // if error, return error
      if (err) {
        console.log(`Error loading product ${productId} from database`, err);
        callback(err);
      }
      // else if product does not exist, create and send error
      // db.collections.find() does not return error when no query match
      else if (data[0] === undefined || !data[0].productId) {
        console.log(`Error: product ${productId} does not exist`);
        callback(new Error('Product not found!'));
      }
      // else document record at productId exists, so send data
      else {
        callback(null, data);
      }
    });
}

module.exports = CustomerQuestions;