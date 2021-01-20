const assert = require('assert');
const mongoose = require('mongoose');
const db = mongoose.connection;
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
    mongoose.connect('mongodb://localhost/fec_customer_questions');
    mongoose.connection
    .once('open', () => console.log('Database connected for testing!'))
    .on('error', (error) => {
      console.warn('Error: ', error);
    });

    beforeEach((done) => {
      db.collections.customerquestions.drop(() => {
        done();
      });
    });

    it('creates and saves records in the database sucessfully', (done) => {
      let fakeTestData = fakeDataGenerator(1, 0);
      let fakeCustomerQuestions = new CustomerQuestions(fakeTestData);
      fakeCustomerQuestions.save()
        .then(() => {
          assert(!fakeCustomerQuestions.isNew);
          done();
        })
        .finally(() => mongoose.connection.close());
    });
  });
});