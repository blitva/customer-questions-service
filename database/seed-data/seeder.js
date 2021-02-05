const mongoose = require('mongoose');
const CustomerQuestions = require('../database.js');
const { fakeDataGenerator } = require('./fakeDataGenerator.js');

async function seedDatabase(recordsToCreate, startingRecordID) {
  try {
    const fakeData = await fakeDataGenerator(recordsToCreate, startingRecordID);

    (async () => {
      try {
        await mongoose.connect('mongodb://localhost/fec_customer_questions', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
        });
      } catch (error) {
        console.log('connection error', err);
      }
    })();

    mongoose.connection.once('open', () => console.log('Mongoose connection established for seeding.'));

    await CustomerQuestions.deleteMany({});
    console.log('Clearning CustomerQuestions database collection before seeding.');

    console.log(`Seeding database with ${fakeData.length} record(s).`);
    CustomerQuestions.insertMany(fakeData)
      .then(() => console.log('Database seeding complete.'))
      .catch((err) => console.log('Error seeding database', err))
      .finally(() => mongoose.connection.close());

  } catch(error) {
    // catch fakeDataGenerator error
    console.log(error);
    mongoose.connection.close();
  }
};

// load seedDatabase with (recordsToCreate, startingRecordID)
seedDatabase(100, 1000);

module.exports.seedDatabase = seedDatabase;