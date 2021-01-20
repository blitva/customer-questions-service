const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/fec_customer_questions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose connection established'));

const customerQuestionsSchema = new mongoose.Schema({
  productId: {
    type: Number,
    unique: true
  },
  ask: [
    {
      questions: String,
      answers: [{type: String}],
      user: String,
      date: Date,
      rating: Number
    }
  ]
});

const CustomerQuestions = mongoose.model('CustomerQuestions', customerQuestionsSchema);

module.exports = CustomerQuestions;