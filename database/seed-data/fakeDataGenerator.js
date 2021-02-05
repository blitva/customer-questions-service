const faker = require('faker');

// genereate fake question
const fakeQuestion = () => faker.lorem.sentence().slice(0, -1) + '?';

// generate fake user
const fakeUser = () => faker.name.findName();

// generate fake date
const fakeDate = () => faker.date.past();

// generate rating between 1-100
const fakeRating = () => Math.floor(Math.random() * 100) + 1;

// generate an array of 1-10 answers, each with an answer, user, and date keys
const fakeAnswers = async () => {
  let numOfAnswers = Math.floor(Math.random() * 10) + 1;
  let answersArray = [];

  while (numOfAnswers > 0) {
    answersArray.push({
      answer: await faker.lorem.paragraph(),
      user: await fakeUser(),
      date: await fakeDate()
    });

    numOfAnswers--;
  }

  return answersArray;
};

const fakeDataGenerator = async (recordsToCreate, startingRecordID) => {
  let data = [];

  // generate N number of records based on param
  while (recordsToCreate > 0) {
    // generate random number between 1-10 for number of questions per product
    let numOfQuestions = Math.floor(Math.random() * 10) + 1;
    let questionAndAnswers = [];

    // generate N number of questions per record
    while(numOfQuestions > 0) {
      questionAndAnswers.push({
        question: await fakeQuestion(),
        answers: await fakeAnswers(),
        rating: await fakeRating()
      })

      numOfQuestions--;
    }

    data.push({
      productId: startingRecordID,
      questionAndAnswers: questionAndAnswers
    })

    recordsToCreate--;
    startingRecordID++;
  }

  return data;
};

module.exports.fakeDataGenerator = fakeDataGenerator;