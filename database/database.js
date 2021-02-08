const mongoose = require('mongoose');

// open mongoose connection
mongoose.connect('mongodb://localhost/fec_customer_questions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

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
  CustomerQuestions
    .aggregate([
      { $match: { productId: productId }},
      { $unwind: '$questionAndAnswers' },
      { $sort: { 'questionAndAnswers.rating': -1 }},
      { $group: { _id: '$_id',
        productId: { $first: '$productId'},
        questionAndAnswers: { $push: '$questionAndAnswers'}}
      }
    ])
    .exec((err, data) => {
      // if error, return error
      if (err) {
        callback(err);
      }
      // else if product does not exist, create and send error
      else if (data[0] === undefined || !data[0].productId) {
        callback(new Error(`Product ${productId} not found!`));
      }
      // else document record at productId exists, so send data
      else {
        callback(null, data);
      }
    });
}

module.exports = CustomerQuestions;
module.exports.load = load;