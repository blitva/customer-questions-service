const assert = require('assert');
const mongoose = require('mongoose');
const CustomerQuestions = require('../database/database.js');
const { fakeDataGenerator } = require('../database/seed-data/fakeDataGenerator.js');

describe('Database seeding', () => {
  describe('Fake Data Generator', () => {
    it('should generate 100 records when 100 records are requestesd', () => {
      return fakeDataGenerator(100, 0)
        .then((fakeTestData) => {
          assert.equal(fakeTestData.length, 100);
        });
    });
  });

  describe('Seeding Script', () => {
    it('throws an error if no parameters are passed into fakeDataGenerator()', async (done) => {
      await assert.rejects(() => fakeDataGenerator(), Error, 'Must include recordsToCreate and startingRecordID params')
        .then(done())
    });

    // open mongoose connection for testing save to database
    mongoose.connect('mongodb://localhost/fec_customer_questions');
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

    beforeEach('Clear database of test document record', (done) => {
      CustomerQuestions.deleteOne({ productId: 1 }, (err) => {
        done();
      });
    });

    it('creates and saves records in the database sucessfully', (done) => {
      let fakeTestData = fakeDataGenerator(1, 1);
      let fakeCustomerQuestions = new CustomerQuestions(fakeTestData[0]);
      fakeCustomerQuestions.save()
        .then(() => {
          assert(!fakeCustomerQuestions.isNew);
        })
        .then(done())
    });

    after('Close mongoose connection', (done) => {
      mongoose.connection.close();
      done();
    });
  });
});