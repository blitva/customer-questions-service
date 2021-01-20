const mongoose = require('mongoose');
const CustomerQuestions = require('../database.js');
const { fakeDataGenerator } = require('./fakeDataGenerator.js');

(async function seedDatabase() {
  // load fakeDataGenerator with (recordsToCreate, startingRecordID)
  let fakeData = await fakeDataGenerator(100, 1000);

  console.log(`Seeding database with ${fakeData.length} record(s).`);

  CustomerQuestions.insertMany(fakeData)
    .then(() => console.log('Database seeding complete.'))
    .catch((err) => console.log('Error seeding database', err))
    .finally(() => mongoose.connection.close());
})();